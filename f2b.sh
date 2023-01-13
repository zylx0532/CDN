#!/bin/bash
echo "[Installing Centos EPEL]"
yum install epel-release -y > /dev/null 2>&1
echo "[Installing Dependences]"
yum install rsyslog iptables-services -y > /dev/null 2>&1
service iptables save
iptables-save > /root/iptables.backup
yum remove firewalld -y > /dev/null 2>&1
echo "[Installing Fail2ban]"
yum install fail2ban -y > /dev/null 2>&1
echo "[Configuring Fail2ban for SSH]"
cat > /etc/fail2ban/jail.local <<EOF
[DEFAULT]
# 以空格分隔的列表，可以是 IP 地址、CIDR 前缀或者 DNS 主机名
# 用于指定哪些地址可以忽略 fail2ban 防御
ignoreip = 127.0.0.0/8 172.16.0.0/12 10.0.0.0/8 192.168.0.0/16

# 客户端主机被禁止的时长（秒）
bantime = 31536000

# 客户端主机被禁止前允许失败的次数 
maxretry = 3

# 查找失败次数的时长（秒）
findtime = 30

mta = echo

[ssh-iptables]
enabled = true
filter = sshd
action = iptables[name=SSH, port=ssh, protocol=tcp]
# Red Hat 系的发行版
logpath = /var/log/secure
# ssh 服务的最大尝试次数 
maxretry = 3
EOF
echo "[Start fail2ban onboot]"
echo "service fail2ban start" >> /etc/rc.local
echo "[Starting fail2ban]"
service fail2ban start
service iptables save
echo "Use:\"fail2ban-client status ssh-iptables\" to show the banned clinet."
