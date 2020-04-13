module.exports = () => `Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту <code>a</code> со значением <code>123</code>.

Тем не менее, когда мы приводим объект к строке, он становится <code>"[object Object]"</code>. Таким образом, мы говорим, что <code>a["object Object"] = 123</code>. Потом мы делаем то же самое. <code>c</code> это другой объект, который мы неявно приводим к строке. Поэтому <code>a["object Object"] = 456</code>.

Затем, когда мы выводим <code>a[b]</code>, мы имеем в виду <code>a["object Object"]</code>. Мы только что установили туда значение <code>456</code>, поэтому в результате получаем <code>456</code>.
`;