---
layout: ../../layouts/ProjectLayout.astro
title: Masters of Reinassance
author: Flavio Rizzoglio
description: A brief explaination on how I buildt Masters of Reinassance!
---

# Masters of Reinassance

## 1. :pen: Description

This repository contains the Java distributed implementation of the popular board Game [Masters of Reinassance](https://craniointernational.com/products/masters-of-renaissance/), completed as part of the Software Engineering course of [Politecnico di Milano](polimi.it).

The game can be played in a distributed settings, with differnt client connecting from wherever in they want in the world. This implementation also offers both a GUI and a CLI version of the game.

The project also accounts for persistence of the servers and it is resilient to disconnections of the clients.

| :warning: WARNING                                                                    |
| :----------------------------------------------------------------------------------- |
| Be aware, the server that hosts the Business logic may be offline due to inactivity. |

## 2. :rocket: Running the Client

### 2.1 CLI

To run the CLI version, open the terminal and type:
`java -jar MastersOfRenaissance.jar cli`

Once you have run the command, select your nickname. Now, indicate whether you want to create or join a game, using one of these two commands:

1. Creation: `create`;
2. Join: `join`.

If you selected the first option, select the number of players you wish to play with. Otherwise, if you selected the second option, enter the id of the game in which you wish to play.
Wait for the other players (if any) and start playing!

### 2.2 GUI

There are two ways to run the GUI version:

1. Through the CLI: enter the following command `java -jar MastersOfRenaissance.jar gui`;
2. Through the .jar file: click on the file!

## 3. 🗃️ Server

The server's .jar file is hosted on a Linux machine (EC2 of Amazon AWS) and is permanently active. Anyone in possession of the client-side .jar file can automatically connect to the server.

The server's .jar file has however been included in the folder `/deliverables`.

## 4. 🧪 Testing

The coverage of the Model is about 80% and 100% for the Controller. The untested methods are the various getters, setters and toString() functions.
