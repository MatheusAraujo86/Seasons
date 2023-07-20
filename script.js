function checar(){
  let mes = document.getElementById('txtmes').value
  if(mes.toLowerCase() == 'janeiro' || mes.toLowerCase() == 'fevereiro' || mes.toLowerCase() == 'março'){
    res.innerHTML = `Estamos no verão`
  } else if(mes.toLowerCase() == 'abril' || mes.toLowerCase() == 'maio' || mes.toLowerCase() == 'junho'){
    res.innerHTML = `Estamos no outono`
  } else if (mes.toLowerCase() == 'julho' || mes.toLowerCase() == 'agosto' || mes.toLowerCase() == 'setembro'){
    res.innerHTML = `Estamos no inverno`
  } else if (mes.toLowerCase() == 'outubro' || mes.toLowerCase() == 'novembro' || mes.toLowerCase() == 'dezembro'){
    res.innerHTML = `Estamos na primavera`
  } else {
    res.innerHTML = `Digite um mês válido!`
  }
}