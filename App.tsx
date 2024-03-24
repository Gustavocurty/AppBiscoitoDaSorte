import React, {useState} from "react"
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"

export default function App(){

  const [img, setImg] = useState(require('./src/assets/biscoito.png'))
  const [frase, setFrase] = useState(' " Aqui vai sua frase! " ')

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.'
  ]

  function abrirBiscoito() {
    setImg(require('./src/assets/biscoitoAberto.png'))

    let numeroAletatorio = Math.floor(Math.random() * frases.length)
    setFrase ('" ' + frases[numeroAletatorio] + ' "')
  
  }

  function fecharBiscoito() {
    setImg(require('./src/assets/biscoito.png'))
    setFrase (' " Aqui vai sua frase! " ')
  }

return (
		<View style = {styles.container}>

      <Text style = {[styles.textoFrase, { fontSize: 35}]}>
        Biscoito da sorte
      </Text>

      <Image source={img} style={styles.biscoito}/>

      <Text style = {styles.textoFrase}>
        {frase}
      </Text>

      <TouchableOpacity style={styles.button} onPress={abrirBiscoito}>
        <View style={styles.buttonArea}>
          <Text style ={styles.buttonText}>
            Descobrir Segredo
          </Text>
        </View>
      </TouchableOpacity>
    
      <TouchableOpacity style={[styles.button, {marginTop: 15}]} onPress={fecharBiscoito}>
        <View style={styles.buttonArea}>
          <Text style ={styles.buttonText}>
            Esconder Segredo
          </Text>
        </View>
      </TouchableOpacity>
    
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  biscoito: {
    width: 300,
    height: 300
  },
  button: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor:'#dd7b22',
    borderRadius: 25
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#dd7b22',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textoFrase: {
    color: '#dd7b22',
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: 'italic'
  }
})