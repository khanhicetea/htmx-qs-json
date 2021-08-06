## Htmx-Qs-Json

[HTMX](https://htmx.org/) extension which transforms the body of requests from x-www-form-urlencoded to application/json

It's better version than original [json-enc](https://htmx.org/extensions/json-enc) extension

## Usage

Add this script below Htmx script

```html
<script src="https://cdn.jsdelivr.net/gh/khanhicetea/htmx-qs-json@1.0.0/dist/qs-json.min.js"></script>
```

Add `hx-ext="qs-json"` to form element which you wanted to apply the extension.

```html
<form hx-post='/login' hx-ext='qs-json' trigger="submit" method="post">
    <p><input type="text" name="username" /></p>
    <p><input type="password" name="password" /></p>
    <p><input type="text" name="data[age]" /></p>
    <p><textarea name="data[note]"></textarea></p>
    <p><input type="submit" value="Login"></p>
</form>
```

Will transform this request 

```
...
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
...

username=nobody&password=passwd_here&data%5Bage%5D=25&data%5Bnote%5D=This%20is%20textarea%0Aescape%20URI%20%3A%20username%3Dheacker
```

to Json request

```
...
Content-Type: application/json
...

{"username":"nobody","password":"passwd_here","data":{"age":"25","note":"This is textarea\nescape URI : username=heacker"}}
```

## LICENSE

MIT License