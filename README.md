# postMessage Harness 

Simple html + vanilla javascript playground for messing with `postMessage` between a host page and iframed pages.

## Before you start
In order to enforce cross domain policies, we need to load things from different hosts. To do this locally we need to add entries to your host file.

```
127.0.0.1 www.fakegis.com
127.0.0.1 site-org.fakehub.fakegis.com
127.0.0.1 www.fakeportal.com
127.0.0.1 dashapp.fakegis.com
127.0.0.1 storyapp.fakegis.com
127.0.0.1 evilcorp.com
```

## Starting things up
We use `http-server` which is a node module, so first, lets get that installed

```
$ npm install
```

With that out of the way, we need to start up two servers - one will run on port 3000 and host the "host" application

```
$ npm start:host
```

In another terminal window, you'll need to start a second server, running on port 3001 and this will host the iframed content

```
$ npm start:embeded
```

Now, open `http://www.fakegis.com:3000` which will load the host app, and iframe in the embeds.

