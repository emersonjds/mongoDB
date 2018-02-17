Inserir dados em outra coleção


/*
{
   _id: POST_ID,
   title: TITLE_OF_POST, 
   description: POST_DESCRIPTION,
   by: POST_BY,
   url: URL_OF_POST,
   tags: [TAG1, TAG2, TAG3],
   likes: TOTAL_LIKES, 
   comments: [	
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES 
      },
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES
      }
   ]
}
*/

db.exercicio1.insert(
{
   _id: 1,
   title: 'comentario1', 
   description: 'um bom modelo' ,
   by: 'Aquino',
   url: 'http://teste.com/c1',
   tags: ['A','B','C'],
   likes: 10, 
   comments: [	
      {
         user: 'aluno1' ,
         message: 'Estou evoluindo',
         dateCreated: Date(),
         likes: 1 
      },
      {
         user:'aluno2',
         message: 'Muito complicado',
         dateCreated: Date(),
         likes: 0
      },

      {

         user:'aluno3',

         message: 'Legal',

         dateCreated: Date(),

         likes: 0

      }
   ]
})



//inserindo alguns documentos

db.exercicio1.insert(
{
   _id: 2,
   title: 'comentario1', 
   description: 'um bom modelo' ,
   by: 'Vale',
   url: 'http://teste.com/c1',
   tags: ['A','B','C'],
   likes: 50, 
})


db.exercicio1.insert(
{
   _id: 3,
   title: 'comentario1', 
   description: 'um bom modelo' ,
   by: 'Joaquim',
   url: 'http://teste.com/c1',
   tags: ['A','B','C'],
   likes: 5, 
})



db.exercicio1.insert(
{
   _id: 4,
   title: 'comentario1', 
   description: 'um bom modelo' ,
   by: 'Joaquim',
   url: 'http://teste.com/c1',
   tags: ['A','B','C'],
   likes: 100,  
})



Faz a contagem de comentários.

db.exercicio1.mapReduce(
    function() {emit (this.by, this.likes);},
        function(key, values) {return Array.sum(values)},
        {
            //query: {likes: {$gt:0}},
            out: "qtd_comments"
        }
        ).find()   


Outro Exemplo 

db.mr.insert(
[{
    cust_id: "A123",
    amount: 500,
    status: "A"
}

,

{
    cust_id: "A123",
    amount: 250,
    status: "A"
}

,

{
    cust_id: "B212",
    amount: 200,
    status: "A"
}

,

{
    cust_id: "A123",
    amount: 300,
    status: "D"
}])

// Map Reduce Collection MR

db.mr.mapReduce(
    function() {emit (this.cust_id, this.amount);},
        function(key, values) {return Array.sum(values)},
        {
            query: {status: "A"},
            out: "order_totals"
        }
        )

// O resultado mostrará, que o total de 3 documentos (Status "A"), a função emitiu a saída com 2 agrupamentos de chave e valor

// Abaixo o resultudado com o find

db.mr.mapReduce(
    function() {emit (this.cust_id, this.amount);},
        function(key, values) {return Array.sum(values)},
        {
            query: {status: "A"},
            out: "order_totals"
        }
        ).find()


