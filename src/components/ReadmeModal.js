import React, { Component } from 'react';
import Modal from 'react-modal';
import marked from 'marked';
import { getRepoReadme } from '../services/githubService';
import LoadingIndicator from './LoadingIndicator';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(100, 100, 100, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
        overlfow: 'scroll'
    }
};

class ReadmeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readme: '',
            modalIsOpen: false,
            isLoading: false,
        }
    }

    componentWillReceiveProps(props) {
        if (props.isOpen) {
            this.setState({
                modalIsOpen: true
            }, this.getReadme);
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false }, this.props.onClose);
    }

    getReadme = async () => {
        this.setState({
            isLoading: true
        });

        let readme = await getRepoReadme(this.props.repoDetails.repo.owner.login, this.props.repoDetails.repo.name);
        let readmeContent = await readme.json();

        let finalHTML = {
            __html: marked(atob(readmeContent.content))
        }

        this.setState({
            readme: finalHTML,
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
                    {this.state.isLoading ? <LoadingIndicator /> : <div dangerouslySetInnerHTML={this.state.readme}></div>}
                </Modal>
            </div >
        );
    }
}

export default ReadmeModal;