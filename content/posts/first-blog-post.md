+++
title = "First Blog Post" 
draft = false
date = 2024-07-17T22:48:20-05:00
description = "or, a first timer's journey messing with static sites."
slug = ""
authors = ['Me']
tags = ['SWE']
categories = []
externalLink = ""
series = []
+++
or, a first timer's journey messing with static sites.
{{< toc >}}
## What is Hugo?

I'll just [link](https://gohugo.io/) them for you and save you the trouble of having to read my own paraphrasing. I can't resist, however: it's essentially an open source service that helps you generate static websites. Documentation, blogs, portfolios, you name it. I was inspired by [Zoe's](https://zoriya.dev/) blog and wanted to create my own.

## The Goal

This blog post is essentially a letter to my past self. If I had this blog post maybe a few hours earlier, I could've saved myself a lot of headache.
## Installation

Currently, I'm working out of my Windows PC, so I'll go over this part assuming you are doing the same. If not, refer to this [site](https://gohugo.io/installation/).
- [ ] Ensure that [Chocolatey](https://chocolatey.org/), a windows package manager (similar to brew on MacOS or pacman on Arch. I do not use Arch btw). Same thing with [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)
- [ ] Funnily enough, same thing with [Powershell 7)[https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4]
- [ ] run this command, but in Powershell 7: ```choco install hugo-extended```
## Site Creation

Yay! Everything has been installed and is ready to go. I use VS code just because the files are not as numerous to where I would need to use neovim or anything, but use whatever you're comfortable with. Just make sure to use Powershell 7 as your shell here on out.

Check to see if Hugo was installed correctly with ```hugo version```. At the time of this post, it should be around 0.129.0.

Here comes the tricky part. To be fair, it was only tricky for me simply because I already had the makings of a barebones Next.js website, but I was tired of the learning curve. I'll definitely come back to it one day, but Hugo just provided an easier option.

Create a repository on GitHub and name it "username.github.io". (Does the period go inside the parentheses or outside? It looks better inside but logically it feels better outside). Clone into this repo. Now, here's where the fun begins.

Navigate into the repo you just cloned and run: ```
``` Copy
hugo new site example.com
```

