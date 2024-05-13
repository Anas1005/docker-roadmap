# WSL Integration with Windows and VS Code

## Accessing WSL in Windows

1. Open the Ubuntu terminal in WSL.
2. Type `explorer.exe .` and press Enter. This will open the Linux directory in Windows Explorer.

## Accessing Windows in WSL

1. Open the WSL terminal.
2. Navigate to your WSL root folder using the `cd` command, for example: `cd /mnt/c/`.
3. Use the `ls` command to list the contents of your Windows drive and navigate to the directory you want to access.

## Working with VS Code in WSL

1. Install Visual Studio Code on your Windows system.
2. Install the Remote - WSL extension in VS Code.
3. Open your WSL terminal.
4. Navigate to the directory you want to work with using the `cd` command.
5. Type `code .` and press Enter to launch VS Code connected to your WSL environment.

---

# List of Common Linux Commands with Examples

## 1. ls

Example: `ls`, `ls -l`, `ls -a`

## 2. cd

Example: `cd /path/to/directory`, `cd ..`

## 3. pwd

Example: `pwd`

## 4. mkdir

Example: `mkdir new_directory`

## 5. rm

Example: `rm file.txt`, `rm -r directory`

## 6. cp

Example: `cp file.txt newfile.txt`, `cp -r directory new_directory`

## 7. mv

Example: `mv file.txt new_location/`, `mv file.txt newfile.txt`

## 8. touch

Example: `touch newfile.txt`

## 9. cat

Example: `cat file.txt`

## 10. grep

Example: `grep "pattern" file.txt`
