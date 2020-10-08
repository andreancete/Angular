class DateHelper {

    constructor() {
    throw new Error('Esta classe não pode ser instanciada, metodos estaticos');
    }

    static textoParaData(texto) {

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));

    }

    static dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
            
            /*  ou através de template string
                 return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
            */
    }
  }