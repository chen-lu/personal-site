var data = [
  {id: 1, imageUrl: "http://placehold.it/200x200"},
  {id: 2, imageUrl: "http://placehold.it/200x200"},
  {id: 3, imageUrl: "http://placehold.it/200x200"},
  {id: 4, imageUrl: "http://placehold.it/200x200"},
  {id: 5, imageUrl: "http://placehold.it/200x200"},
];

var Project = React.createClass({
  render: function(){
    return (
      <div className="project">
        <img src={this.props.project.imageUrl} className="image"/>
      </div>
    )
  }
});

var Portfolio = React.createClass({
  getInitialState: function(){
    return {curr: this.props.initialCount};
  },
  handleClick: function() {
     this.setState({curr: this.state.curr + 1});
  },
  render: function() {
    var projects = this.props.data.map(function(project, index){
      return (
        <Project project={project} key={project.id} className={this.state.curr == index ? 'active': ''}/>
      )
    }.bind(this));
    return (
      <div className="portfolio-container">
          <button className="scroll-btn" type="button" id="left-button" onClick={this.handleClick}>&lt;</button>
          <div className="main" id="main">
            {projects}
          </div>
          <button className="scroll-btn right" type="button" id="right-button">&gt;</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Portfolio data={data} limit={3} initialCount={0}/>,
  document.getElementById('my-portfolio')
);

$('#right-button').click(function() {
   event.preventDefault();
   $('#main').animate({
      scrollLeft: "+=" + 200 + "px"
   }, "fast");
});

$('#left-button').click(function() {
   event.preventDefault();
   $('#main').animate({
     scrollLeft: "-=" + 200 + "px"
   }, "fast");
});
