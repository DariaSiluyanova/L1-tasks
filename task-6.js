/**Задача о сортировке объектов: у вас есть массив объектов вида 
 * {        
 *      name: 'John',
 *      age: 25 
 *  }. 
 *  Напишите код, который сортирует этот массив по возрастанию
возраста, а при равных возрастах сортирует по алфавиту по полю name. */

const people = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Ann',
        age: 50
    },
    {
        name: 'Tomas',
        age: 21
    },
    {
        name: 'Kyle',
        age: 21
    },
]

function sort(mass) {
    //сортировка по возрасту
    mass.sort(function (a, b) {
        if (a.age > b.age) {
          return 1;
        } 

        if (a.age < b.age) {
          return -1;
        }
        return 0
      });
    //сортировка по имени в случае, если возраст один
    mass.sort(function(c, d) {
        if (c.age === d.age) {
                if (c.name > d.name) {
                return 1;
            }
                if (c.name < d.name) {
                return -1;
            }
        }
    })
    return mass
}

console.log(sort(people))