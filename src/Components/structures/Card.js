import React, { Component } from 'react'

class Card extends React.Component {
    constructor(props) {
      super();
      this.state = {
        pos: {
          x: props.initCords.x,
          y: props.initCords.y
        },
        dragging: false,
        rel: null
      };
    }
    
    componentDidUpdate = (props, state) => {
      if (this.state.dragging && !state.dragging) {
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
      } else if (!this.state.dragging && state.dragging) {
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
      }
    }
    
    handleMouseDown = (e) => {
      var pos = {
        left: e.pageX - $('.grid').offset().left,
        top: e.pageY - $('.grid').offset().top
      }
      if (e.button !== 0) return;
      this.setState({
        dragging: true,
        rel: {
          x: e.pageX - pos.left,
          y: e.pageY - pos.top
        }
      });
      e.stopPropagation();
      e.preventDefault();
    }
    
    handleMouseUp = (e) => {
      currPos = {
        x: this.state.pos.x,
        y: this.state.pos.y
      }
      this.setState({
        dragging: false,
        pos: {
          x: Math.floor(currPos.x / 15) * 15,
          y: Math.floor(currPos.y / 15) * 15
        }
      });
      e.stopPropagation();
      e.preventDefault();
    }
    
    handleMouseMove = (e) => {
      if (!this.state.dragging) return
      this.setState({
        pos: {
          x: e.pageX - this.state.rel.x,
          y: e.pageY - this.state.rel.y
        }
      });
      e.stopPropagation();
      e.preventDefault();
    }
    
    //Chooses which template the card will use
    chooseCardTemplate = () => {
      
      switch(this.props.settings.template) {
          
          case "npc":
          return (
              <div className="card__content">
                  <div className="card__header">
                      <span className="card__headerName">{this.props.settings.name}</span>
                      <span className="card__headerSpan">Lv{this.props.settings.level}</span>
                  </div>
                  <div className="card__portrait">
                      <img src={this.props.settings.portraitUrl}></img>
                  </div>
                  <div className="card__text">
                      <span className="card__stats">Str: {this.props.settings.stats.str} | Dex: {this.props.settings.stats.dex} | Int: {this.props.settings.stats.int} | Wis: {this.props.settings.stats.wis} | Cha: {this.props.settings.stats.cha}</span>
                      <span className="card__class">{this.props.settings.alignment} {this.props.settings.class}</span>
                      <span className="card__background">
                      Background: {this.props.settings.background}.
                      </span>
                      <span className="card__moreDetails">
                      <a href="google.com">More Details</a>
                      </span>
                  </div>
              </div>
          );
          break;  
  
          case "dTable":
          var dTableVals = this.props.settings.val;
          return (
            <div className="card__content">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{this.props.settings.dice.num + "d" + this.props.settings.dice.type}</th>
                            <th>{this.props.settings.title}</th>
                        </tr>
                        {dTableVals.map(vals => {
                              return (
                                  <tr>
                                      <td>{vals[0]}</td>
                                      <td>{vals[1]}</td>
                                  </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
          );
          break;
  
          case "iTable":
          var iTableVals = this.props.settings.val;
          return (
            <div className="card__content">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>{this.props.settings.lColHead}</th>
                            <th>{this.props.settings.rColHead}</th>
                        </tr>
                        {iTableVals.map(vals => {
                              return (
                                  <tr>
                                      <td>{vals[0]}</td>
                                      <td>{vals[1]}</td>
                                  </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
          );
          break;
  
          case "img":
          return(
              <div className="card__content">
                  <img src={this.props.settings.imgUrl} alt={this.props.settings.alt} />
              </div>
          );
          break;
  
          default: 
          return (
            <h1>Invalid Template Name</h1>
          );
          break;
      }
    }
    
    /*Templates */
    
    render(){
      
      const $cardStyles = {
        left: this.state.pos.x + "px",
        top: this.state.pos.y + "px",
      }
      
      const $card = this.chooseCardTemplate();
      const $cardClass = "card " + this.props.settings.template;
  
      return(
         <div className={$cardClass} style={$cardStyles}  onMouseOut={this.handleMouseOut} onMouseDown={this.handleMouseDown} >
              {$card}
         </div>
      )
    }
  }

  export default Card;