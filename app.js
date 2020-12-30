//Declaramos DOM 

// LLAMAMOS A LA API 
// your custom ajax request here
var url = 'https://corona.lmao.ninja/v3/covid-19/countries/Spain,Italy,Germany,Poland,Finland'
var maxvalue = 10000
function ajaxRequest(params) {
    
    $.get(url + '?' + $.param(params.data)).then(function (res) {
        params.success(res)
    })
}

// controlar la fecha 

function fechaParse(paramFecha) {

    var d = new Date(paramFecha);

    return d
}

// condicional si casos actiivos es mas de 10.000 cambiar color amarillo, si es menos verde 
function cellStyle(value, row, index) {
    var classes = [
        'bg-green',
        'bg-yellow'
    ]

    if (value > maxvalue) {
        return {
            css: {
                background: 'yellow'
            }
        }
    }
    return {
        css: {
            background: 'green'
        }
    }

}


var $table = $('#table')

  $(function() {
    $('#toolbar').find('select').change(function () {
      $table.bootstrapTable('destroy').bootstrapTable({
        exportDataType: $(this).val(),
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        columns: [
          {
            field: 'state',
            checkbox: true,
            visible: $(this).val() === 'selected'
          },
          {
            field: 'country',
            title: 'Nombre país'
          }, {
            field: 'population',
            title: 'Población'
          }, {
            field: 'activePerOneMillion',
            title: 'Casos activos por millón de habitantes'
          }, {
            field: 'updated',
            title: 'Últimza actualización de los datos'
          }
        ]
      })
    }).trigger('change')
  })

  function addCountry(e) {
    var $table = $('#table')
    e.preventDefault()
    url += ',' + document.querySelector('#next-country').value
    $table.bootstrapTable('refresh', {
      url: url
    })
  }