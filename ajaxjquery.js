
//Ajax Retrieving the from the DataBase
    function showData(){
        $.ajax({
            url:"display.php",
            data:"",
            method:"GET",
            dataType:"json",
            success:function(response){
                // console.log(response);
                for(i=0; i<response.length; i++){
                    $('#tbody').append(
                        '<tr><td>' + response[i].id + '</td><td>' + response[i].name + '</td><td>' + response[i].email + '</td><td>' + response[i].password + '</td><td><button class="btn btn-warning btn-sm edit-button" data-sid=' + response[i].id + '>Edit</button><button class="btn btn-danger btn-sm delete-button" data-sid=' + response[i].id + '>Delete</button></td></tr>'
                    )
                }
                
                
            }
        })
    }
    showData();
  //Ajax Retreving Data Ends Here

  //Ajax delete Data Start Here
  $('#tbody').on('click','.delete-button',function(){
    $('#tbody').html('');
      console.log('Delete button clicked');
      let id = $(this).attr("data-sid");
      console.log(id);
     data = {sid:id};
      //Ajax Call
      $.ajax({
          url:"delete.php",
          method:"POST",
          data:JSON.stringify(data),
          success:function(response){
            $('#resultMessage').html('<h5 class="alert alert-success mt-2">' + response + '</h5>');
              setTimeout(function(){
                $('#resultMessage').fadeOut('slow');
            },3000);
            showData();
          }
      })
  })


  //Ajax delete Data Ends Here

  //Ajax Edit Data Start Here
$('tbody').on('click','.edit-button',function(){
    console.log('Edit Button Clicked');

    let id = $(this).attr("data-sid");
    console.log(id);
    //Access fform Input here
    mydata = {sid:id};
    //Ajax Call

    $.ajax({
        url:"edit.php",
        data:JSON.stringify(mydata),
        method:"POST",
        dataType:"json",
        success:function(response){
            $('#studid').val(response.id);
            $('#nameid').val(response.name);
            $('#emailid').val(response.email);
            $('#passid').val(response.password);
        }
    })
})

   //Ajax Edit Data Ends Here

    //Ajax Call For Submit The Data Start Here
    $(document).ready(function(){
    $('#submitButton').click(function(e){
        e.preventDefault();
        $('#tbody').html('');
        console.log('Submit Button clicked');

      //Accessing the For Data Here
        let studid = $('#studid').val();
        let nameid = $('#nameid').val();
        let emailid = $('#emailid').val();
        let passid = $('#passid').val();
        formData = {id:studid,name:nameid,email:emailid,password:passid};
        console.log(formData);

        //Ajax Call
        $.ajax({
            type: "POST",
            url: "insert.php",
            data: JSON.stringify(formData),
            dataType: "",
            success: function (response) {
                $('#resultMessage').html('<h5 class="alert alert-success mt-2">' + response + '</h5>');
                $('#studentForm')[0].reset();
                showData();
                setTimeout(function(){
                    $('#resultMessage').fadeOut('slow');
                },3000);

            }
        });

       
    })

 //Ajax Call For Submit The Data End Here
})