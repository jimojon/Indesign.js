function write(path, content) {

    if(encoding == null)
        encoding = 'UTF-8';

    var file = new File(path);
    file.encoding = encoding;
    file.open('w');
    file.write(content);
    file.close();
}

function read(path) {
    var file = new File(path);
    file.open('r');
    return file.read();
}