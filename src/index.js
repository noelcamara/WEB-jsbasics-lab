/**
 * Return true if it's even, and false if it isn't.
 *
 * @param {Number} i
 */
export const isNumberEven = i => {
    return i % 2 === 0;
};


/**
 * `str` is a string, but it may not have a file extension.
 * Return the file extension (with no period) if it has one, otherwise false
 * @param {String} str
 */
export const getFileExtension = str => {
    let lastIndex = str.lastIndexOf(".");

    if (lastIndex > 0 && lastIndex < str.length - 1) {

        return str.substring(lastIndex + 1);

    }
    else
    {return false;}

};

/**
 * `arr`is a string.
 * Return the longest string in the array
 *
 * @param {String} arr
 */
export const longestString = arr => {
    let longestString;
    let longestStringLength = 0;
    for (let s of arr) {

        if (typeof s === 'string') {

            if (s.length > longestStringLength) {
                longestStringLength = s.length;
                longestString = s;
            }

        }

    }
    return longestString;

};

/**
 * `str` is an string.
 * Return a new string who's characters are in the opposite order to str's.
 * @param {String} str
 */
export const reverseString = str => {
    return str.split("").reverse().join("");
};


/**
 * `str` is a string.
 * Return true if it is a palindrome and false otherwise.
 * It should be case insensitive and not consider space or punctuation.
 *
 * @param {String} str
 */
export const isPalindrome = str => {
    let newValue = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    return newValue.split("").reverse().join("") === newValue;

};

/**
 * `arr` will be an array containing integers, strings and/or arrays like itself.
 * Return the sum all the numbers you find, anywhere in the nest of arrays.
 */
export const nestedSum = arr => {
    return arr.reduce((accum, current) => {
            if (typeof current === 'number') {
                return accum + current;
            }
            else if (Array.isArray(current)) {

                return accum + nestedSum(current);
            }
            else
            {return accum;}


        }, 0

    );
};


/**
 * Retire du tableau `tab` passé en paramètre les éléments passés en
 * paramètres dans `elms`.
 *
 * On utilise la destructuration pour pouvoir utiliser tous les arguments
 * après `tab` comme un tableau.
 *
 * Après l'exécution le tableau d'origine est réellement modifié, ce
 * on ne retourne pas une copie.
 *
 * Exemple :
 * let tab = ['a', 'b', 'c', 'b', 'c'];
 * pull(tab, 'a', 'b');
 * tab; // ['c']
 *
 * @param {Array} tab
 * @param  {objects} elms
 */
export const retireDe = (tab, ...elms) => {
    for (let ele of elms) {

        let indexOfElement = tab.indexOf(ele);

        while (indexOfElement !== -1) {

            tab.splice(indexOfElement, 1);
            indexOfElement = tab.indexOf(ele);

        }

    }

    return tab;
};
/**
 * Aplatit en profondeur un tableau passé en paramètre.
 *
 * Indications :
 * - Utiliser la récursion.
 * - Utiliser `Array.prototype.concat()` avec un tableau vide ([]) et l'opérateur de déstructuration (...) pour aplatir  un tableau.
 *
 * Exemple :
 * aplatirRecursif([5, [4], [[3], 2], [1], 0]);
 * // [5, 4, 3, 2, 1, 0]
 */
export const aplatirRecursif = tab => {

    let tabAplatir = [];

    for (let ele of tab) {
        if (Array.isArray(ele)) {
            tabAplatir = tabAplatir.concat(aplatirRecursif(ele));
        }
        else
        {tabAplatir = tabAplatir.concat(ele);}
    }

    return tabAplatir;

};
/**
 * Retourne la liste de toutes les permutations des objets du tableau passé en paramètre.
 *
 * Exemple :
 * permutations([0,1,2]);
 * // [ [ 0, 1, 2 ],
 * //   [ 0, 2, 1 ],
 * //   [ 1, 0, 2 ],
 * //   [ 1, 2, 0 ],
 * //   [ 2, 0, 1 ],
 * //   [ 2, 1, 0 ] ]
 *
 * @param {Array} tab
 */
export const permutations = tab => {
  if (tab.length <= 2) {
    return tab.length === 2 ? [tab, [tab[1], tab[0]]] : tab;
  }
  return tab.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...tab.slice(0, i), ...tab.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

/**
 * Retourne un élément au hazard parmi les éléments du tableau `tab` passé en
 * paramètre.
 *
 * @param {Array} tab
 */
export const echantillon = tab => tab[Math.floor(Math.random() * tab.length)];

/**
 * Prend un tableau 'tab' et le transforme en string avec chaque élément séparé par le `separateur`.
 * Les deux derniers éléments sont séparé pas le séparateur `fin`.
 *
 * Exemple:
 * enumerer(['Riri', 'Fifi', 'Loulou'], ', ', ' et ');
 * // 'Riri, Fifi et Loulou'
 *
 *
 * @param {Array} tab
 * @param {string} separateur
 * @param {string} fin
 */
export const enumerer = (tab, separateur = ', ', fin = separateur) => {
    if(tab.length === 0){
        return undefined;
    }


    else{
        return tab.reduce((accum,current) => {

            if(tab.indexOf(current) === tab.length-1) {

                return accum.concat(fin,current);

            }
            else{

                return accum.concat(separateur,current);

            }

        });

    }

};

/**
 * Retourne, sous forme d'un tableau, les `n` plus grand nombres du tableau `tab` passé en paramètre.
 *
 * Attention, on ne doit pas modifier le tableau d'origine.
 *
 * Utiliser `Array.prototype.sort()`, l'opérateur de destructuration (...) et `Array.prototype.slice()`
 */
export const nMax = (tab, n = 1) => {
    let number = tab.filter(t => typeof t === 'number');

    if(n >= tab.length){
        return number;
    }

    else{

        return number.sort( (a,b) => a - b ).reverse().slice(0,n);

    }
};
