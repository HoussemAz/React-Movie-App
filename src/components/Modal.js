import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

export default class AddMovie extends Component {
  state = {
    open: false,

    title: "",
    date: "",
    src: "",
    rate: ""
  };

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handelClick = e => {
    e.preventDefault();
    const newMovie = {
      src: this.state.src,
      title: this.state.title,
      date: this.state.date,
      rate: this.state.rate
    };
    this.props.movie(newMovie);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button className="btn-modal" type="button" onClick={this.handleOpen}>
          +
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.state.open}>
            <div className="paper">
              <h2>Add Movies :</h2>
              <input
                type="text"
                placeholder="title"
                name="title"
                onChange={this.handelChange}
              />
              <input
                type="text"
                placeholder="Link"
                name="src"
                onChange={this.handelChange}
              />
              <input
                type="text"
                placeholder="date"
                name="date"
                onChange={this.handelChange}
              />
              <input
                type="text"
                placeholder="rate"
                name="rate"
                onChange={this.handelChange}
              />
              <button
                onClick={e => {
                  this.handelClick(e);
                  this.handleClose();
                }}
              >
                Add
              </button>
              <button onClick={this.handleClose}>Cancel</button>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
