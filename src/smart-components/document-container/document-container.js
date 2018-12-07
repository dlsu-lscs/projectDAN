import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { get_general_info, get_aps_info, get_det_info} from '../../apis/specific_document';

import './document-container.css';
import { template } from './template';

// import { documents } from '../../utils/databse-sample';
import { connect } from 'react-redux';
import radarIcon from '../../assets/radar-icon.png';
class DocumentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            found: false,
            document: {},
            general: null,
            details: null,
            aps: null,
            empty: true,
            radarIcon: radarIcon
        }
        this.getDocumentInfo = this.getDocumentInfo.bind(this);
    }
    componentDidMount(){
        let { id } = this.props;
        this.getDocumentInfo(id);
    }
    
    getDocumentInfo(id){
        get_general_info(id, gen_info => {
            if(gen_info){
                this.setState({empty: false})
            }
            this.setState({found: true});
            this.setState({general: gen_info});
            
        })
        get_aps_info(id, aps_info => {
            this.setState({aps: aps_info});
        })
        get_det_info(id, det_info => {
            this.setState({details: det_info})
        })

    }
    render() {
        if(!this.state.found ){
            return(
                <div></div>
            )
        }
        if(this.state.found && this.state.empty){
            return (
                <div> Document not found</div>
            )
        }
        return (template(this));
    }
}

DocumentContainer.propTypes = {
    history: PropTypes.object.isRequired
};
const mapStateToProps = state => {
    return { ref_keys: state.authReducer.ref_keys };
}
export default connect(mapStateToProps)(withRouter(DocumentContainer));
