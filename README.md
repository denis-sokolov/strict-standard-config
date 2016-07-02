# Strict Standard config

[![Build Status](https://travis-ci.org/denis-sokolov/strict-standard-config.svg?branch=master)](https://travis-ci.org/denis-sokolov/strict-standard-config)
[![Code Climate](https://codeclimate.com/github/denis-sokolov/strict-standard-config/badges/gpa.svg)](https://codeclimate.com/github/denis-sokolov/strict-standard-config)
[![Dependency Status](https://gemnasium.com/denis-sokolov/strict-standard-config.svg)](https://gemnasium.com/denis-sokolov/strict-standard-config)
[![Codacy Badge](https://api.codacy.com/project/badge/6b10ce1497b74736a6413c812b0532aa)](https://www.codacy.com/app/denis-sokolov/strict-standard-config)
[![bitHound Score](https://www.bithound.io/github/denis-sokolov/strict-standard-config/badges/score.svg)](https://www.bithound.io/github/denis-sokolov/strict-standard-config)

This is a Strict Standard configuration for ESLint. You might want to use the [`strict-standard` tool](https://github.com/denis-sokolov/strict-standard) for convenience.

## Usage

```
npm install --save-dev eslint eslint-config-strict-standard eslint-plugin-standard eslint-plugin-promise
```

Create an `.eslintrc` file in your project:

```
{
  "extends": "strict-standard"
}
```

Add the following to your `package.json`:

```
{
    "scripts": {
        "lint": "eslint ."
    }
}
```
