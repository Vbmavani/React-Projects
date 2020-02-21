import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import IntegrationReactSelect from './IntegrationReactSelect';
//var classNames = require('classnames');

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

class Form extends React.Component {
    constructor(){
        super();
        this.state=({
            radio :'female',
            gilad: true,
            jason: false,
            antoine: false,

        })
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };    
      handleChangeselection = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    render(){
        const { classes } = this.props;
        console.log('this.state',this.state);
    const { gilad, jason, antoine } = this.state;
        return(
            <div>
                <div>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.radio}
                    onChange={this.handleChange('radio')}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                    />
                </RadioGroup>
                </FormControl>
                </div>
                <div>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Checkbox checked={gilad} onChange={this.handleChangeselection('gilad')} value="gilad" />
                    }
                    label="Gilad Gray"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={jason} onChange={this.handleChangeselection('jason')} value="jason" />
                    }
                    label="Jason Killian"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={antoine}
                        onChange={this.handleChangeselection('antoine')}
                        value="antoine"
                        />
                    }
                    label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                </div>
                <div>
                    <IntegrationReactSelect></IntegrationReactSelect>
                </div>
            </div>
        )
    }
}

export default  withStyles(styles)(Form);