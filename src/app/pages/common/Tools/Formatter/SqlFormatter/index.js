import React from "react";
import { Container, FormatterArea } from "./elements";
import sqlFormatter from "sql-formatter";
import SplitPane from "react-split-pane";
import CodeBlock from "app/components/CodeBlock";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const SQL_FRAGMENT = `
SELECT t.order_id, t.\`customer_name\`,concat((UNIX_TIMESTAMP(t.fkcs)-UNIX_TIMESTAMP(t.fengkzs))/60, '分') FKCS,concat((UNIX_TIMESTAMP(t.fkzs)-UNIX_TIMESTAMP(t.fkcs))/60, '分') FKFH,concat((UNIX_TIMESTAMP(t.htdy)-UNIX_TIMESTAMP(t.fkzs))/60, '分') BMDGL,concat((UNIX_TIMESTAMP(t.fkqr)-UNIX_TIMESTAMP(t.htdy))/60, '分') FK, t.fkqr fkrq,

concat(((UNIX_TIMESTAMP(t.fkcs)-UNIX_TIMESTAMP(t.fengkzs)) + (UNIX_TIMESTAMP(t.fkzs)-UNIX_TIMESTAMP(t.fkcs)) + (UNIX_TIMESTAMP(t.htdy)-UNIX_TIMESTAMP(t.fkzs)) + (UNIX_TIMESTAMP(t.fkqr)-UNIX_TIMESTAMP(t.htdy)))/60, '分') TOTAL
 FROM (SELECT     o.\`order_id\`, 
                             ( 
SELECT d.dd_value_name 
  FROM   \`tb_data_dictory_context\` d 
    WHERE  d.\`date_dictionary_name\`='PRODUCT_LIST'
        AND    d.dd_value=o.\`product_id\` limit 1) product,
       c.\`customer_name\`, 
   v0.\`create_time_\`       fengkzs, 
                             v1.\`create_time_\`       fkcs, 
                             v2.\`create_time_\`       fkzs, 
                             o.\`contract_print_date\` htdy, 
                             o.\`loan_date\`           fkqr 
    FROM       \`act_hi_varinst\` v 
       INNER JOIN \`act_hi_varinst\` v0 
              ON         v0.\`proc_inst_id_\`=v.\`proc_inst_id_\` 
                  AND        v0.\`name_\`='fkzs' 
                  INNER JOIN \`act_hi_varinst\` v1 
                  ON         v1.\`proc_inst_id_\`=v.\`proc_inst_id_\` 
     AND        v1.\`name_\`='fangkcs' 
                  INNER JOIN \`act_hi_varinst\` v2 
                  ON         v2.\`proc_inst_id_\`=v.\`proc_inst_id_\` 
                  AND        v2.\`name_\`='fangkfh' 
                  INNER JOIN tb_order o 
      ON         o.\`order_id\`=v.\`text_\` 
                  INNER JOIN \`tb_resident_customer_info\` c 
                  ON         c.\`resident_customer_id\`=o.\`customer_number\`
                  WHERE      v.\`name_\`='mainObjectId') t
`;

class Formatter extends React.Component {
  state = {
    code: SQL_FRAGMENT,
    lang: "sql"
  };
  constructor(props) {
    super(props);
    this.setState({
      lang: "sql",
      code: ""
    });
  }

  onClearClicked = () => {
    this.setState({
      code: ""
    });
  };

  onExampleClicked = () => {
    this.setState({
      code: SQL_FRAGMENT
    });
  };

  render() {
    let _sql = sqlFormatter.format(this.state.code, {
      language: this.state.lang === "sql" ? "sql" : "sql", // Defaults to "sql"
      indent: "    " // Defaults to two spaces
    });
    return (
      <Container>
        <Chip label="SQL格式化器" style={{ width: "10rem" }} />
        <div>
          <Select
            value={this.state.lang}
            label="选择语言"
            style={{ width: "10%", marginBottom: "1rem", marginTop: "2rem" }}
            onChange={e => {
              console.log(e.target.name);
              this.setState({
                lang: e.target.value
              });
            }}
          >
            <MenuItem value="">
              <em>无</em>
            </MenuItem>
            <MenuItem value="sql">SQL</MenuItem>
          </Select>
          <Button
            variant="contained"
            children="清空"
            style={{ marginLeft: "2rem" }}
            onClick={this.onClearClicked}
          />
          <Button
            variant="contained"
            children="示例"
            style={{ marginLeft: "2rem" }}
            onClick={this.onExampleClicked}
          />
        </div>
        <SplitPane
          style={{
            position: "relative",
            border: "1px solid gray",
            height: "80vh"
          }}
          split={"vertical"}
          size={"50%"}
          defaultSize={"50%"}
          pane1Style={{ height: "100%", overflow: "scroll" }}
          pane2Style={{
            overflow: "auto",
            height: "100%",
            overflow: "scroll",
            background: "#2d2d2d"
          }}
        >
          <FormatterArea
            ref={e => {
              this.sqlArea = e;
            }}
            value={this.state.code}
            onChange={e => {
              this.setState({ code: e.target.value });
            }}
            rows={50}
          >
            {this.state.code}
          </FormatterArea>
          <CodeBlock language={this.state.lang} value={_sql} hideTitle={true} />
        </SplitPane>
      </Container>
    );
  }
}

export default Formatter;
