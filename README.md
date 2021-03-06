# data-validator-js

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Downloads][downloads-image]][npm-url]

Javascript validations and utility library

Install
----
     npm install --save-dev data-validator-js
Usage
----

## Table of Contents

* [Installation and setup](#installation)
    - [Using npm](#installation)
        - [SetUp in TS](#setup)
    * [Usage](#usage)
        + [IsNullOrEmpty](#IsNullOrEmpty)



## Installation

```
npm install --save-dev data-validator-js
```

## Setup

```Typescript
import { StringUtilities } from "data-validator-js";

```
"StringUtilities" has all the validation methods

## IsNullOrEmpty

```Typescript
import { StringUtilities } from "data-validator-js";

let isValidString = StringUtilities.IsNullOrEmpty('test string') // false
isValidString = StringUtilities.IsNullOrEmpty('123') // false
isValidString = StringUtilities.IsNullOrEmpty('') // true
isValidString = StringUtilities.IsNullOrEmpty(' ') // true
isValidString = StringUtilities.IsNullOrEmpty(null) // true

```
