#!/bin/bash

# Ask for computer number
while true; do
    read -p "Enter the Computer Number: " computerNumber
    if [[ "$computerNumber" =~ ^[a-zA-Z0-9\-]+$ ]]; then
        break
    else
        echo "Invalid input. Please enter only alphanumeric characters and hyphens (-)."
    fi
done

# Define an array of commands
presetCommands=("cmd" "gpupdate /force" "net localgroup \"Remote Desktop Users\" $(whoami) /add" "net localgroup \"Remote Desktop Users\" \"customUser\" /add")

# Prompt the user to select a command to be executed remotely
echo "Select a command to be executed remotely:"
for ((i=0; i<${#presetCommands[@]}; i++)); do
    echo "$((i+1))) ${presetCommands[$i]}"
done
echo "$((i+1))) Custom command"
read -p "Enter the number of the command to be executed: " commandNumber

# Determine which command to execute based on user input
if [ $commandNumber -ge 1 ] && [ $commandNumber -le ${#presetCommands[@]} ]; then
    if [ $commandNumber -eq $((i-1)) ]; then
        read -p "Enter the custom username for local group \"Remote Desktop Users\": " customUser
        presetCommands[$((commandNumber-1))]=${presetCommands[$((commandNumber-1))]/customUser/$customUser}
    fi
    remoteCommand=${presetCommands[$((commandNumber-1))]}
elif [ $commandNumber -eq $((i+1)) ]; then
    read -p "Enter the custom command to be executed remotely: " remoteCommand
else
    echo "Invalid command number. Exiting..."
    exit 1
fi

# Use psexec to execute the specified command remotely on the target machine
D:/SysInternals/psexec.exe \\$computerNumber $remoteCommand

# Pause the script and wait for user input
read -p "Press [Enter] to exit..."
