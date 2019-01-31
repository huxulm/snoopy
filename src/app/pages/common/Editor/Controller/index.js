import React, { Children } from "react";
import {
  Container,
  CtrlItemWrapper,
  CtrlGroupWrapper,
  StyledButton,
  CtrlContentWrapper
} from "./elements";
import HoverMenu from "app/components/HoverMenu";
import FaItalic from "react-icons/lib/fa/italic";
import FaHeader from "react-icons/lib/fa/header";
import FaCode from "react-icons/lib/fa/code";
import FaExpand from "react-icons/lib/fa/expand";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { withStyles } from "@material-ui/core/styles";
import noop from "lodash/noop";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "20rem"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  }
});

function withWrapper(Component, props) {
  return (
    <CtrlItemWrapper horizontal vertical>
      <Component {...props} />
    </CtrlItemWrapper>
  );
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDelete = data => {};

  handleAddTag = tag => {
    if(this.props.onTagsSelected) {
      this.props.onTagsSelected(tag);
    }
  }

  render() {
    const {
      title,
      createTime,
      modifyTime,
      classes,
      tags = [],
      mode
    } = this.props;
    return (
      <Container ref={e => (this.conRef = e)}>
        <CtrlGroupWrapper>
          {withWrapper(FaHeader)}
          {withWrapper(FaItalic)}
          {withWrapper(FaCode)}
          {withWrapper(FaExpand, {
            onClick: e => {
              if (this.props.onClickFullscreen) {
                this.props.onClickFullscreen();
              }
            }
          })}
        </CtrlGroupWrapper>
        <CtrlGroupWrapper>
          <StyledButton onClick={this.props.onClickCancel || noop}>
            取消
          </StyledButton>
          <StyledButton onClick={this.props.onClickSave || noop}>
            保存
          </StyledButton>
        </CtrlGroupWrapper>
        <CtrlContentWrapper>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.heading}>其他</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <TextField
                label="标题"
                variant="outlined"
                margin="normal"
                className={classes.textField}
                value={title}
                onChange={this.props.onTitleChanged || noop}
              />
              <TextField
                label="创建时间"
                variant="outlined"
                margin="normal"
                defaultValue={createTime}
                className={classes.textField}
                onChange={this.props.onCreateTimeChanged || noop}
                type="date"
              />
              <TextField
                label="修改时间"
                variant="outlined"
                margin="normal"
                defaultValue={modifyTime}
                className={classes.textField}
                onChange={this.props.onModifyTimeChanged || noop}
                type="date"
              />
              {this.state.open === false && (
                <button
                  onClick={() => {
                    this.setState({
                      open: true
                    });
                  }}
                >
                  +TAG
                </button>
              )}
              {this.state.open === true && (
                <HoverMenu
                  onClose={e => {
                    this.setState({
                      open: false
                    });
                  }}
                >
                  <Paper>
                    {tags.map(data => {
                      return (
                        <Chip
                          key={data.id}
                          icon={null}
                          clickable={true}
                          onClick={() => {
                            this.handleAddTag(data);
                            // this.setState({
                            //   open: false
                            // });
                          }}
                          label={data.name}
                          onDelete={this.handleDelete(data)}
                          className={classes.chip}
                        />
                      );
                    })}
                  </Paper>
                </HoverMenu>
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CtrlContentWrapper>
      </Container>
    );
  }
}

export default withStyles(styles)(Controller);
