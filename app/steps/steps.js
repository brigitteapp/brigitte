'use strict';

angular.module('myApp.steps', ['ngRoute'])

    .controller('StepsCtrl', function ($scope, $location) {
        $scope.steps = [{"id":1,"a":{"img":"1A.jpg","value":"A"},"b":{"img":"1C.jpg","value":"C"}},{"id":2,"a":{"img":"2A.gif","value":"A"},"b":{"img":"2M.gif","value":"M"},"c":{"img":"2C.jpg","value":"C"}},{"id":3,"a":{"img":"3C.jpg","value":"C"},"b":{"img":"3E.jpg","value":"E"}},{"id":4,"a":{"img":"4L.jpg","value":"L"},"b":{"img":"4S.jpg","value":"S"}},{"id":5,"a":{"img":"5I.jpg","value":"I"},"b":{"img":"5P.jpg","value":"P"}},{"id":6,"a":{"img":"6I.jpg","value":"I"},"b":{"img":"6S.jpg","value":"S"}},{"id":7,"a":{"img":"7P.jpg","value":"P"},"b":{"img":"7S.jpg","value":"S"}}]

        $scope.recoTree = {"A":{"A":{"C":{"L":{"I":{"I":{"P":13,"S":31},"S":{"P":31,"S":31}},"P":{"I":{"P":13,"S":31},"S":{"P":31,"S":31}}},"S":{"I":{"I":{"P":22,"S":35},"S":{"P":22,"S":35}},"P":{"I":{"P":22,"S":22},"S":{"P":22,"S":22}}}},"E":{"L":{"I":{"I":{"P":17,"S":6},"S":{"P":6,"S":6}},"P":{"I":{"P":17,"S":6},"S":{"P":6,"S":6}}},"S":{"I":{"I":{"P":29,"S":44},"S":{"P":44,"S":44}},"P":{"I":{"P":29,"S":44},"S":{"P":44,"S":44}}}}},"M":{"C":{"L":{"I":{"I":{"P":13,"S":31},"S":{"P":13,"S":31}},"P":{"I":{"P":13,"S":13},"S":{"P":13,"S":13}}},"S":{"I":{"I":{"P":22,"S":18},"S":{"P":22,"S":18}},"P":{"I":{"P":22,"S":22},"S":{"P":22,"S":19}}}},"E":{"L":{"I":{"I":{"P":17,"S":6},"S":{"P":6,"S":6}},"P":{"I":{"P":17,"S":6},"S":{"P":6,"S":6}}},"S":{"I":{"I":{"P":29,"S":3},"S":{"P":3,"S":3}},"P":{"I":{"P":29,"S":3},"S":{"P":3,"S":3}}}}}},"C":{"C":{"C":{"L":{"I":{"I":{"P":13,"S":9},"S":{"P":9,"S":9}},"P":{"I":{"P":13,"S":9},"S":{"P":23,"S":9}}},"S":{"I":{"I":{"P":22,"S":20},"S":{"P":22,"S":20}},"P":{"I":{"P":22,"S":22},"S":{"P":22,"S":22}}}},"E":{"L":{"I":{"I":{"P":32,"S":0},"S":{"P":0,"S":0}},"P":{"I":{"P":32,"S":0},"S":{"P":4,"S":8}}},"S":{"I":{"I":{"P":39,"S":38},"S":{"P":38,"S":38}},"P":{"I":{"P":39,"S":38},"S":{"P":38,"S":36}}}}},"M":{"C":{"L":{"I":{"I":{"P":13,"S":27},"S":{"P":27,"S":27}},"P":{"I":{"P":13,"S":27},"S":{"P":27,"S":27}}},"S":{"I":{"I":{"P":22,"S":20},"S":{"P":22,"S":20}},"P":{"I":{"P":22,"S":22},"S":{"P":11,"S":2}}}},"E":{"L":{"I":{"I":{"P":21,"S":16},"S":{"P":16,"S":16}},"P":{"I":{"P":21,"S":16},"S":{"P":33,"S":16}}},"S":{"I":{"I":{"P":29,"S":24},"S":{"P":24,"S":24}},"P":{"I":{"P":29,"S":24},"S":{"P":24,"S":12}}}}}}};

        $scope.expoData = [{"name":"Gaîté Lyrique : Capitaine Futur"},{"name":"Fondation Vuitton : Franck Gehry"},{"name":"Musée Picasso"},{"name":"Grand Palais : Hokusai"},{"name":"Galerie Artludik : Art de Assassin's Creed"},{"name":"Centre Pompidou : Marcel Duchamp"},{"name":"Pinacothèque : Expo Kamasutra"},{"name":"Cinémathèque : Truffaut"},{"name":"Street Art : Fondation EDF"},{"name":"Musée Art Ludique : Dessins Studio Ghibli"},{"name":"Musée de Louvre"},{"name":"Musée Zadkine"},{"name":"Musée d'Orsay : Sade"},{"name":"Musée du Moyen-âge : Voyager"},{"name":"Musée Cernuschi : Japon au fil des saisons "},{"name":"Institut du monde arabe : Maroc Contemporain"},{"name":"Musée d'Art Moderne : Sonia Delaunay"},{"name":"Musée de la Chasse et de la Nature : Cabinet des curiosités"},{"name":"Musée Hébert"},{"name":"Musée Rodin"},{"name":"Musée d'Art et d'Histoire du Judaïsme : Roman Vishniac"},{"name":"Musée de la Franc-Maçonnerie : Expo Daumier"},{"name":"Maison de Balzac"},{"name":"Musée Arts Décoratifs Mode et du Textile : AD Intérieurs"},{"name":"Musée de l'Armée : Vu du front"},{"name":"Musée des Arts Asiatiques Guimet : Dynastie des Han"},{"name":"Musée Galliéra - Musée de la Mode de la ville de Paris : Mode des 50's"},{"name":"Musée National de L'Orangerie des Tuileries : Emile Bernard"},{"name":"Musée de la Vie Romantique : La Fabrique du Romantisme"},{"name":"Catacombes de Paris"},{"name":"Musée Carnavalet-Histoire de Paris"},{"name":"Musée de Montmartre : Expo Esprit de Montmartre"},{"name":"Cité des Sciences et de l'Industrie : Art robotique"},{"name":"Musée de la magie et des automates"},{"name":"Musée Maillol : Les Borgia et leur temps"},{"name":"BNF : De rouge et de noir - Les vases grecs"},{"name":"Jeu de Paume : Gary Winogrand"},{"name":"Musée des Lettres et Manuscrits : Je n'ai rien d'autre à te dire sinon que je t'aime"},{"name":"Château de Versailles : Lee Ufan"},{"name":"Monnaie de Paris : Paul McCarthy, Chocolate Factory"},{"name":"Tour jean sans peur : Expo l'amour au M A"},{"name":"Saint chapelle : visite de la Sainte Chapelle"},{"name":"Palais des beaux arts : Possible d'un monde fragmenté"},{"name":"Crypte archéologique du parvis de Notre-Dame: viste de la crypte"},{"name":"Quai Branly : Les Mayas"}]

        $scope.current_step = $scope.steps[0];
        $scope.imga = "url('img/questions/" + $scope.current_step.a.img + "')";
        $scope.imgb = "url('img/questions/" + $scope.current_step.b.img + "')";

        $scope.choice = "a";

        $scope.choices = [];

        render_slides(function (value) {
            $scope.choice = value;
            console.log(value)
            $scope.render_next(value);
        })

        $scope.render_next = function (value) {
            var next_step_id = $scope.current_step.id;

            $scope.choices.push($scope.current_step[value].value)

            if (next_step_id >= $scope.steps.length) {
                next_step_id = $scope.steps.length - 1;

                var reco = $scope.recoTree[$scope.choices[0]][$scope.choices[1]][$scope.choices[2]][$scope.choices[3]][$scope.choices[4]][$scope.choices[5]][$scope.choices[6]];

								test($scope.choices)


                console.log("expoData", $scope.expoData[reco])
            }
            
            $scope.current_step = $scope.steps[next_step_id];

            console.log('slider value is', $scope.current_step);

            $scope.imga = "url('img/questions/" + $scope.current_step.a.img + "')";
            $scope.imgb = "url('img/questions/" + $scope.current_step.b.img + "')";

            $scope.$apply();
        }
    })
