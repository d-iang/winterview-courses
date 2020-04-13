module.exports = () => `Каждая функция имеет свой собственный <i>контекст исполнения</i> (или <i>область действия</i>). Функция <code>getName</code> сначала ищет в своем собственном контексте (области действия), чтобы увидеть, содержит ли она переменную <code>name</code>, к которой мы пытаемся получить доступ. В этом случае функция <code>getName</code> содержит собственную переменную <code>name</code>: мы объявляем переменную <code>name</code> с ключевым словом <code>let</code> и значением <code>'Sarah'</code>.

Переменные с ключевым словом <code>let</code> (и <code>const</code>) поднимаются в начало функции, в отличие от <code>var</code>, которые <i>не инициализируется</i>. Они недоступны до того, как мы объявим (инициализируем) их строку. Это называется "временной мертвой зоной". Когда мы пытаемся получить доступ к переменным до их объявления, JavaScript выдает <code>ReferenceError</code>.

Если бы мы не объявили переменную <code>name</code> в функции <code>getName</code>, движок javascript посмотрел бы вниз по <i>цепочки области действия</i>. Внешняя область имеет переменную с именем <code>name</code> со значением <code>Lydia</code>. В этом случае он бы записал "Лидию".
`;