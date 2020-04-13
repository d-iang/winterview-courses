module.exports = () => `Выражения внутри литералов шаблона расчитываются первыми. Это означает, что строка будет содержать возвращаемое значение выражения, в данном случае немедленно исполняемую функцию <code>(x => x)('I love')</code>. Мы передаем значение <code>'I love'</code> в качестве аргумента стрелочной функции <code>x => x</code>. <code>x</code> равно <code>'I love'</code>, которое и возвращается. Это приводит к <code>I love to program</code>.
`;