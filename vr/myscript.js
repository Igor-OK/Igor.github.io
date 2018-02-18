	
    function matrixArray(rows,columns){
        var arr = new Array();
        for(let i=0; i<rows; i++){
          arr[i] = new Array();
          for(let j=0; j<columns; j++){
            arr[i][j] = Math.random() > 0.7 ? 1 : 0 ;// наполняем матрицу
          }
        }
        return arr;
    }



//Переменные
    var islands_map = matrixArray(10,10);
    var myscene = document.querySelector('a-scene');
    var new_map = [];
    var way = [];

        for (let i=0; i< islands_map.length ; i++){
          for (let j=0; j< islands_map[i].length; j++){

			var mybox = document.createElement('a-entity');
			mybox.setAttribute('geometry', "primitive:box;depth:0.95;width:0.95;height:0.35");
			mybox.setAttribute('id',i.toString()+"-"+j.toString())

			var x = i-5;
			var y = -2;
			var z = j-15;
			mybox.setAttribute ('position', x+" "+y+" "+z);

			if(islands_map[i][j] === 0){
				mybox.setAttribute('material', "color:#65a6ff");
			} else {
				mybox.setAttribute('material', "color:#fad946");
			}

			myscene.appendChild (mybox);
		  }
		}


    function solution(map) {
        //делаем дубликат карты
        for (var i=0; i<map.length; i++){
            matrix[i] = map[i].slice();
            for (var j=0; j<map[i].length; j++){
                 matrix[i][j] = map[i][j];
            }
        }
        //обплываем все по порядку, если нашли землю, шаримся, пока не изучам весь остров и плывем дальше
        for (let i=0; i< matrix.length ; i++){
          for (let j=0; j< matrix[i].length; j++){
            cursorWay.push([i,j]); //документируем
            if(matrix[i][j] === 1 ){ // обнаружена неизвестная суша (если известная - то [1, номер острова], если неизвестная - то просто 1
              matrix[i][j] = [1,islandNumber];//устанавливаем флаг с номером острова и, ниже, исследуем весь остров (рекурсивно) и расставляем флажки
              goodNeighbourArea (matrix, i, j);// шаримся по острову, расставляем флажки
              islandNumber++; // выходя из этой ветки можно брать следующий номер, тк текущий остров весь нашелся в полном объёме
            }
            else{
              continue;
            }
          } 
        }
        root.SHRI_ISLANDS.NEW_MAP = matrix;//сохраняем карту с флагами
        root.SHRI_ISLANDS.WAY = cursorWay;//сохраняем пройденный путь
        // todo: подсчитать кол-во островов на карте
        //выводим количество островов на карте, islandNumber- номер флага для следующего острова (который не нашли), а (islandNumber-1) - номер последнего острова и количество островов, соответственно
        return islandNumber-1;
    }


    function goodNeighbourArea (arr, m, n){ 
        if((m!==0) && (arr[m-1][n] === 1)){
            arr[m-1][n] = [1,islandNumber];
            cursorWay.push([m-1,n]);
            goodNeighbourArea(arr,m-1,n);
        }
        if((m!==arr.length-1) && (arr[m+1][n] === 1)){
            arr[m+1][n] = [1,islandNumber];
            cursorWay.push([m+1,n]);
            goodNeighbourArea(arr,m+1,n);
        }
        if((n!==0) && (arr[m][n-1] === 1)){
            arr[m][n-1] = [1,islandNumber];
            cursorWay.push([m,n-1]);
            goodNeighbourArea(arr,m,n-1);
        }
        if((n!==arr[m].length-1) && (arr[m][n+1] === 1)){
            arr[m][n+1] = [1,islandNumber];
            cursorWay.push([m,n+1]);
            goodNeighbourArea(arr,m,n+1);
        }
    };
	

