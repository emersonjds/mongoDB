Inserir dados dentro de uma coleção 

mongoimport  --host 127.0.0.1:27017 --file=restaurantes.json

==================================================================================================================

1. Escreva uma consulta MongoDB para exibir todos os restaurantes.
R:db.restaurantes.find();

2. Escreva uma consulta MongoDB para exibir os campos restaurant_id, nome, cidade e gastronomia para todos os restaurantes da coleção.
R: db.restaurantes.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

3. Escreva uma consulta MongoDB para exibir os campos restaurant_id, nome, cidade e gastronomia, mas exclua o campo _id para todos os restaurantes da coleção.
R:db.restaurantes.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1,"_id":0});

4. Escreva uma consulta MongoDB para exibir os campos restaurant_id, nome, cidade e código postal, mas exclua o campo _id para todos os restaurantes.
R: db.restaurantes.find({},{"restaurant_id" : 1,"name":1,"borough":1,"address.zipcode" :1,"_id":0});

5. Escreva uma consulta MongoDB para exibir todo o restaurante que está no bairro Bronx. 
R:db.restaurantes.find({"borough": "Bronx"});

6. Escreva uma consulta MongoDB para exibir o primeiro 5 restauranteS que está no bairro Bronx.
R:db.restaurantes.find({"borough": "Bronx"}).limit(5);

7.Escreva uma consulta MongoDB para exibir os próximos 5 restaurantes depois de saltar primeiro 5 que estão no bairro Bronx. 
R:db.restaurantes.find({"borough": "Bronx"}).skip(5).limit(5); 

8. Escreva uma consulta MongoDB para encontrar os restaurantes que alcançaram uma pontuação superior a 90. 
R:db.restaurantes.find({grades : { $elemMatch:{"score":{$gt : 90}}}});

9. Escreva uma consulta MongoDB para encontrar os restaurantes que alcançaram uma pontuação, mais de 80 mas menos de 100. 
R:db.restaurantes.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});

10. Escreva uma consulta MongoDB para encontrar os restaurantes que localizam com valor de latitude inferior a -95.754168.
R:db.restaurantes.find({"address.coord" : {$lt : -95.754168}});

11. Escreva uma consulta do MongoDB para encontrar os restaurantes que não preparam qualquer culinária de "American" e sua nota de mais de 70 e menos de -65.754168.
R:db.restaurantes.find(
               {$and:
                    [
                       {"cuisine" : {$ne :"American "}},
                       {"grades.score" : {$gt : 70}},
                       {"address.coord" : {$lt : -65.754168}}
                    ]
                }
                    );

12. Escreva uma consulta do MongoDB para encontrar os restaurantes que não preparam qualquer culinária de "americano" e alcançaram uma pontuação superior a 70 e localizados em longitude inferior a -65.754168.
R:db.restaurantes.find(
                     {$query:
                            {
                             "cuisine" : {$ne : "American "},
                             "grades.score" :{$gt: 70},
                             "address.coord" : {$lt : -65.754168}
                            }
                      });
					

13. Escreva uma consulta do MongoDB para encontrar os restaurantes que não preparam qualquer culinária de "americano" e alcançaram um ponto de classificação 'A' não pertence ao bairro do Brooklyn. O documento deve ser exibido de acordo com a cozinha em ordem decrescente. 
R:db.restaurantes.find(
                     {$query:
                            {
                             "cuisine" : {$ne : "American "},
                             "grades.grade" :"A",
                             "borough": "Brooklyn"
                            },
                              $orderby : {"cuisine":-1}
                      } 
                    );
					

14. Escreva uma consulta do MongoDB para encontrar o Id, o nome, o bairro e a cozinha do restaurante para os restaurantes que contêm "Wil" como as três primeiras letras para o seu nome. 
R:db.restaurantes.find(
{name: /^Wil/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

15. Escreva uma consulta MongoDB para encontrar o Id, o nome, o bairro e a cozinha do restaurante para aqueles restaurantes que contêm 'ces' como as três últimas letras para o seu nome.
R:db.restaurantes.find(
{name: /ces$/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

16. Escreva uma consulta MongoDB para encontrar o Id, o nome, a cidade e a gastronomia do restaurante para aqueles restaurantes que contêm 'Reg' como três letras em algum lugar em seu nome.
R:db.restaurantes.find(
{"name": /.*Reg.*/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

17. Escreva uma consulta do MongoDB para encontrar os restaurantes que pertencem ao Bronx do município e preparou um prato americano ou chinês. 
R:db.restaurantes.find(
{ 
"borough": "Bronx" , 
$or : [
{ "cuisine" : "American " },
{ "cuisine" : "Chinese" }
] 
} 
);

18. Escreva uma consulta do MongoDB para encontrar o Id, o nome, o bairro e a cozinha do restaurante para os restaurantes que pertencem ao distrito Staten Island ou Queens ou Bronxor Brooklyn. 
R:db.restaurantes.find(
{"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

19. Escreva uma consulta do MongoDB para encontrar o Id, o nome, o bairro e a cozinha do restaurante para os restaurantes que não pertencem ao distrito Staten Island ou Queens ou Bronxor Brooklyn.
R:db.restaurantes.find(
{"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

20. Escreva uma consulta MongoDB para encontrar o Id, o nome, o bairro e a cozinha do restaurante para os restaurantes que alcançaram uma pontuação que não é superior a 10. 
R:db.restaurantes.find(
{"grades.score" : 
{ $not: 
{$gt : 10}
}
},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);


Desafio


21. Escreva uma consulta do MongoDB para encontrar o Id, o nome, o bairro e a gastronomia do restaurante para os restaurantes que prepararam prato, exceto 'American' e 'Chinees' ou o nome do restaurante começa com a letra 'Wil'.

22. Escreva uma consulta MongoDB para encontrar o Id, o nome e as notas do restaurante para os restaurantes que obtiveram um grau de "A" e obtiveram 11 em um ISODATE "2014-08-11T00: 00: 00Z" entre muitas datas de pesquisa. 

23. Escreva uma consulta do MongoDB para encontrar o Id, o nome e as notas do restaurante para os restaurantes em que a matriz do 2º elemento da série contém um grau de "A" e pontuação 9 em um ISODATE "2014-08-11T00: 00: 00Z".

24. Escreva uma consulta do MongoDB para encontrar o Id, o nome, o endereço e a localização geográfica do restaurante para os restaurantes em que o 2º elemento da coord possui um valor superior a 42 e até 52. 

25. Escreva uma consulta MongoDB para organizar o nome dos restaurantes em ordem crescente, juntamente com todas as colunas. 

26. Escreva uma consulta MongoDB para organizar o nome dos restaurantes em descida juntamente com todas as colunas. 

27. Escreva uma consulta MongoDB para organizar o nome da cozinha em ordem crescente e para a mesma cozinha, o bairro deve estar em ordem decrescente.

28. Escreva uma consulta MongoDB para saber se todos os endereços contêm a rua ou não.

29. Escreva uma consulta MongoDB que selecionará todos os documentos na coleção de restaurantes onde o valor do campo coord é Duplo. 

30. Escreva uma consulta MongoDB que selecionará o Id, o nome e as notas do restaurante para os restaurantes que retornam 0 como um resto depois de dividir o placar em 7.

31. Escreva uma consulta do MongoDB para encontrar o nome do restaurante, o bairro, a longitude e a atitude e a cozinha para os restaurantes que contém "mon" como três letras em algum lugar em seu nome. 

32. Escreva uma consulta do MongoDB para encontrar o nome do restaurante, o bairro, a longitude e a latitude e a cozinha para os restaurantes que contêm 'Mad' como as primeiras três letras do seu nome. 

https://www.w3resource.com/mongodb-exercises/#PracticeOnline
