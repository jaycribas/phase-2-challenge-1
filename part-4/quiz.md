- When you run a command in the terminal, where does BASH look for that command?  
```
/usr/local/bin
```

- On a UNIX computer, how do you stop a running process?  
```
kill <process num>
```

- What packages do you have installed via homebrew?  
```
bash, gdbm, heroku, htop, httpie, libamyl, mongodb, openssl, pandoc, postgresql, python3, readline, ruby, sqlite, xz
```

- On a UNIX computer, how do you find the process id of a running process?
```
ps
```

- In a terminal, what does control-c do?
```
escape
```

- In a terminal, what does control-a do?
```
move cursor to the beginning of a line
```

- In a terminal, what does control-e do?
```
move cursor to the end of a line
```

- What keyboard shortcut do you use to split the screen in your editor?
```
Trick question? I don't. But one could use ⌘-⇧-P, type 'split' and choose which direction to split. (in Atom)
```

- What keyboard shortcut do you use to split the screen in your terminal?
```
⌘-D (vertical), ⌘-⇧-D (horizontal), ⌘-W (close)
```

- When a terminal command completes, how can you tell if it was successful or not?
```
echo $?
(0 means successful)
```

- What does your `~/.gitconfig` have in it? (paste the whole file here)
```
[user]
    name = Jay Cribas
    email = feverjay@gmail.com
[color]
    ui = auto
~
~
~
"~/.gitconfig" 5L, 73C
```

- What is the difference between a relative and absolute path?
```
A relative path points to a file starting from within the current working directory.
An absolute path points to a file from the root directory.
```

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?
```
cd ../pinterest-for-dogs
```

- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
```
⌘-O
```

- What files or folders do you want all git repositories to ignore?
```
node_modules
.env
*.log
```

- What is the main difference between `==` and `===` in JavaScript?
```
=== tests for strict equality, both the same type and value. (false === 0 : false)
== tests loose equality (false == 0 : true)
```
