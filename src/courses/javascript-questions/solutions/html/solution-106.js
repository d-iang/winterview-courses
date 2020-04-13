module.exports = () => `В JavaScript у нас есть два способа доступа к свойствам объекта: нотация в скобках или нотация в точках. В этом примере мы используем точечную нотацию (<code>colorConfig.colors</code>) вместо скобочной нотации (<code>colorConfig["colors"]</code>).

В точечной нотации JavaScript пытается найти свойство объекта с таким точным именем. В этом примере JavaScript пытается найти свойство с именем <code>colors</code> в объекте <code>colorConfig</code>. Не существует свойства с именем <code>colorConfig</code>, поэтому возвращается <code>undefined</code>. Затем мы пытаемся получить доступ к значению первого элемента, используя <code>[1]</code>. Мы не можем сделать это для значения, которое <code>undefined</code>, поэтому оно выдает <code>TypeError</code>: <code>Cannot read свойство '1' of undefined</code>.

JavaScript интерпретирует (или распаковывает) операторы. Когда мы используем скобочные обозначения, он видит первую открывающую скобку <code>[</code> и продолжает работать, пока не найдет закрывающую скобку <code>]</code>. Только тогда он оценит утверждение. Если бы мы использовали <code>colorConfig[colors [1]]</code>, он бы возвратил значение свойства <code>red</code> объекта <code>colorConfig</code>.
`;