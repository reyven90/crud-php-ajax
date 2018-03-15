$(document).ready(function(){
        loadForm = function(){
              $("#loadcontent").hide().fadeIn(1000).load("view/form.php");
              $("#addForm").hide();
              $("#recordList").show();
        }

        loadRecord = function(){
              $("#loadcontent").hide().fadeIn(1000).load("view/record.php");
              $("#addForm").show();
              $("#recordList").hide();
        }
            
         $(document).on("click","#addForm",function(){
                 loadForm();
         });
         
         $(document).on("click","#recordList",function(){
                 loadRecord();
         });


        $(document).on("submit","#employeeFormId",function(){
              if(confirm("Are you sure you want to save this entry")){
                     $.ajax({
                     	    type:'post',
                     	    url:'view/saveUpdate.php',
                     	    data:new FormData(this),
                     	    contentType:false,
                            processData:false,
                     	    dataType:'json',
                     	    beforeSend:function(data){
                                console.log(data);
                     	    },
                     	    success:function(data){
                     	        if(data.response == 'update'){
                     	        	alert(data.message);
                     	        }

                     	        else if(data.response == 'insert'){
                     	        	alert(data.message);
                     	        }

                     	        else if(data.response == 'empty'){
                     	        	alert(data.message);
                     	        }

                     	        else if(data.response == 'invalid'){
                     	        	alert(data.message);
                     	        }

                     	        else if(data.response == 'size'){
                     	        	alert(data.message);
                     	        }

                     	        else if(data.response == 'success'){
                     	        	alert(data.message);
                     	        }

                     	        else if(data.response == 'exist'){
                     	        	alert(data.message);
                     	        }



                     	    	console.log(data);
                     	    },
                     	    error:function(status,error){
                                alert(status.error);
                     	    }
       	              });

                  return false;
              }else{
              	  return false;
              }
        });

        $(document).on("click","#page-link",function(){
              var id = $(this).data("id");
	              $.ajax({
	              	    type:'post',
	              	    url:'view/record.php',
	              	    data:{id:id},
	              	    dataType:'html',
	              	    beforeSend:function(data){
	                         console.log(data);
	              	    },
	              	    success:function(data){
	              	    	$("#loadcontent").html(data);
	              	    	console.log(data);
	              	    },
	              	    error:function(status,error){
	                         alert(status.error);
	              	    }
		              });
        }); 

          $(document).on("click","#deleteData",function(){
               if(confirm("Are you sure you want delete")){
                       var  emp_id = $(this).data("id");
                         $.ajax({
                    	    type:'post',
                    	    url:'view/delete.php',
                    	    data:{emp_id:emp_id},
                    	    dataType:'json',
                    	    beforeSend:function(data){
                               console.log(data);
                    	    },
                    	    success:function(data){
                    	    	if(data.response == 'success'){
                    	    		$("tr#"+emp_id+'').css({"background":"#ccc"});
                    	    		$("tr#"+emp_id+'').fadeOut();
                    	    	}
                    	    	console.log(data);
                    	    },
                    	    error:function(status,error){
                               alert(status.error);
                    	    }
                       });
               }else{
               	  return false;
               }

           });

          $(document).on("click","#viewData",function(){
                     var  emp_id = $(this).data("id");
                       $.ajax({
                  	    type:'post',
                  	    url:'view/getRow.php',
                  	    data:{emp_id:emp_id},
                  	    dataType:'json',
                  	    beforeSend:function(data){
                  	    	 loadForm();
                             console.log(data);
                  	    },
                  	    success:function(data){
                  	    	$("input[name='emp_id']").val(data[0].emp_id);
                  	    	$("input[name='fname']").val(data[0].firstname);
                  	    	$("input[name='lname']").val(data[0].lastname);
                  	    	$("input[name='addr']").val(data[0].address);           	    	
                  	    	console.log(data);
                  	    },
                  	    error:function(status,error){
                             alert(status.error);
                  	    }
                     });
          });

          $(document).on("click","#multipleDelete",function(){
                 var emp_id = [];

                 $(":checkbox:checked").each(function(i){
                 	  emp_id[i] = $(this).val();
                 });

                 if(emp_id.length == 0){
                     alert("please select item !!! ");
                 }else{
                      if(confirm("Are you sure you want delete this item")){
                           $.ajax({
		                    	    type:'post',
		                    	    url:'view/multipleDelete.php',
		                    	    data:{emp_id:emp_id},
		                   
		                    	    beforeSend:function(data){
		                               console.log(data);
		                    	    },
		                    	    success:function(data){
		                    	    	
		                    	    		  for(i=0;i<emp_id.length;i++){
                                                  $("tr#"+emp_id[i]+'').css({"background":"#ccc"});
                                                  $("tr#"+emp_id[i]+'').fadeOut();
		                    	    		  }
		                    	    
		                    	    	console.log(data);
		                    	    },
		                    	    error:function(status,error){
		                               alert(status.error);
		                    	    }
                            });
                      }else{
                      	  return false;
                      }
                 }
          });




        loadRecord();
});