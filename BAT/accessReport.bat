set /p adGroup="Enter the group name: "
set outputFile=Report_%adGroup%.csv

powershell -Command "& {Add-PSSnapin Microsoft.Exchange.Management.PowerShell.SnapIn; Get-ADGroupMember -Identity '%adGroup%' | ForEach-Object {Get-User -Identity $_.SamAccountName} | Select-Object DisplayName,SamAccountName | Export-Csv -Path '%outputFile%' -NoTypeInformation}"

echo Results exported to %outputFile%
