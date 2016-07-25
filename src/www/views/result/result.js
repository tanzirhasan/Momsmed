
    angular.module('App');
       Momsmed.controller('ResultCtrl', function ($scope, $http, $ionicLoading,Medname) {
            $ionicLoading.show();
           $scope.input=Medname;
            var med =Medname.medname;
            $http.get('https://api.fda.gov/drug/label.json' + '?api_key=0hsABDQ17AnD4oCOhV0GxLmGbvNzZ87YqqrJvsf4&search=pregnancy:' + med)
                .success(function (medinfo) {
                    $scope.medinfo = medinfo;
                    // console.log($scope.medinfo.results[0].pregnancy[1].indexOf('Category'))
                    // console.log($scope.medinfo.results[0].nursing_mothers[0])
                    $ionicLoading.hide();

                    var Category = "Pregnancy Category";
                    var Categories = "Pregnancy Categories";
                    $scope.result =[];

                    angular.forEach(medinfo.results[0].pregnancy,  function (Category, Categories) {
                        if (medinfo.results[0].pregnancy === undefined){
                            $scope.pregnancy = "N/A";
                        }
                        for (var i = 0; i < medinfo.results[0].pregnancy.length; i++) {

                            //check if string array contains the string
                            if (medinfo.results[0].pregnancy[i].search("Pregnancy Category") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Category") + 19;


                                $scope.result = medinfo.results[0].pregnancy[i].substring(found, found + 2);
                                break;
                            }
                            else if (medinfo.results[0].pregnancy[i].search("Pregnancy Categories") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Categories") + 21;
                                $scope.result = medinfo.results[0].pregnancy[i].substring(found, found + 56);
                                break;
                            }
                            else {
                                $scope.result = medinfo.results[0].pregnancy[i];

                            }
                        }


                        console.log($scope.result);
                        return $scope.result;
                    });




                    $scope.nurseinfo=[];
                    angular.forEach(medinfo.results[0].nursing_mothers,function(milkinfo){
                        if(medinfo.results[0].nursing_mothers === undefined){
                            $scope.nurseinfo='Not found';
                        }
                        else {
                           for ( var i=0; i < medinfo.results[0].nursing_mothers.length ;i++ ){
                               if (i>=0){
                                   var idx =medinfo.results[0].nursing_mothers[i].indexOf('Nursing Mother');
                                   $scope.nurseinfo= medinfo.results[0].nursing_mothers[0].substring(idx+16,700);
                                   break;

                               }
                               else if(i<0){
                                   $scope.nurseinfo='No infromation found in FDA database';
                                   break;

                               }
                           }


                        }

                    return $scope.nurseinfo;

                    });

                    $scope.druginter=[];
                    angular.forEach(medinfo.results[0].drug_interactions,function (interaction) {
                        if(medinfo.results[0].drug_interactions === undefined){
                            $scope.druginter= 'Not found';
                        }
                        else {
                            var idx= medinfo.results[0].drug_interactions[0].indexOf('Drug Interactions');
                            $scope.druginter= medinfo.results[0].drug_interactions[0].substr(idx+18,5000);
                        }

                    return $scope.druginter ;
                    });
                    $scope.warning=[];
                    angular.forEach(medinfo.results[0].warnings,function (warning) {
                        if(medinfo.results[0].warnings === undefined){
                            $scope.warning='not found';

                        }
                        else {
                            var idx= medinfo.results[0].warnings[0].indexOf('warnings');
                            $scope.warning= medinfo.results[0].warnings[0].substr(idx+9,5000);
                        }
                        return $scope.warning;
                    });
                    $scope.contra=[];
                    angular.forEach(medinfo.results[0].contraindications[0],function (contra) {
                        if(medinfo.results[0].contraindications=== undefined){
                            $scope.contra= 'Not found'
                        }
                        else {
                            var idx= medinfo.results[0].contraindications[0].indexOf('CONTRAINDICATIONS');
                            $scope.contra= medinfo.results[0].contraindications[0].substr(idx+17,5000);

                        }
                        return $scope.contra;
                    });

       }).error(function (err) {
           $ionicLoading.show({
               template: 'Could not find the medication in FDA database. Please check the spelling of the medication.',
               duration: 3000
           });
          });
       });