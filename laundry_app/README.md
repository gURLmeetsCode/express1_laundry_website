# Project Title

One Paragraph of project description goes here

## Description


## Built With

* []()
* []()
* []()

## Author

<!-- // function getReviews(){
//   $.ajax({
//     type: 'GET',
//     url: 'http://jsonplaceholder.typicode.com/users',
//     dataType: 'json',
//     cache: false,
//     sucess: function(data){
//       this.setState({reviews: data}, function(){
//         console.log(this.state);
//       });
//     }.bind(this),
//       error:function(xhr, status, err){
//       console.log(err);
//     }
//   })
// } -->
<!-- this.setState({
  reviews: response
}) -->


<!-- $.ajax({
   type: 'GET',
   url: 'http://jsonplaceholder.typicode.com/users',
   dataType: 'json',
   success: function(data) {
     console.log(data)
     this.setState({reviews: data});
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(this.props.url, status, err.toString());
   }.bind(this)
 });
}
render: function(){
let reviewItems = this.state.reviews.map(function(item){
  return (
    <p key={item.id}><strong>{item.name}</strong> {item.email}</p>
  )
});
return(
  <div>
    {reviewItems}
  </div>
)
} -->
