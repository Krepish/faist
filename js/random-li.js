Array.prototype.shuffle = function( b )
{
  var i = this.length, j, t;
  while( i )
    {
      j = Math.floor( ( i-- ) * Math.random() );
      t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
      this[i] = this[j];
      this[j] = t;
    }
  return this;
};
  
function sort()
  { //получаем текст в LI
    var li=document.getElementsByClassName('foto');
    var text=new Array();
    for (i=0;i<li.length;i++){
      text[i]=li[i].innerHTML;
    }
    //перемешиваем массив ..результат в новый
    var text1=text.shuffle();
    //вставляем текст с нового перемешаного массива обратно
    for (i=0;i<text1.length;i++){
      li[i].innerHTML=text1[i]
    }
  }
sort();