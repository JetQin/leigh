import React, { Component } from 'react';
import { View } from 'react-native';
import { Tabs, Tab } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons/';
import Colors from '../../../constants/Colors';
import { LoadingScreen } from '../../commons';
import { BasicReport, StudyReport, FinancialReport } from './components';
import { ReportApi } from '../../../constants/reportApi';
import styles from './styles/ReportScreen';

const reportApi = new ReportApi();

class ReportScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.$redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="notifications" size={25} color={tintColor} />
    ),
  }
  static defaultProps = {
    reportApi,
  }

  constructor(props) {
    super(props);
    this.state = {
      stockCode: '',
      loading: false,
      basic_report: {},
      study_report: {},
      financial_report: {},
    };
    this.loadBaicReport = this.loadBaicReport.bind(this);
    this.loadFinancialReport = this.loadFinancialReport.bind(this);
    this.loadStudyReport = this.loadStudyReport.bind(this);
    this.addToStockList = this.addToStockList.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const basic_report_view = this.basic_report_view;
    const study_report_view = this.study_report_view;
    const financial_report_view = this.financial_report_view;

    if (params.code) {
      this.setState({ stockCode: params.code });
      this.loadBaicReport(params.code);
    }
  }

  async loadBaicReport(code) {
    const response = await this.props.reportApi.fetchBasicReport(code);
    this.setState({ basic_report: response, loading: true });
    if (this.basic_report_view) {
      this.basic_report_view.update();
    }
  }

  async loadStudyReport() {
    const response = await this.props.reportApi.fetchStudyReport(this.state.stockCode);
    this.setState({ study_report: response });
    this.study_report_view.update();
  }

  async loadFinancialReport() {
    const response = await this.props.reportApi.fetchFinancialReport(this.state.stockCode);
    this.setState({ financial_report: response });
    this.financial_report_view.update();
  }

  addToStockList() {
    console.log('add user stock list');
    console.log(this.state.stockCode);
  }

  changeTab(ref) {
    if (ref.props.heading === '基本信息') {
      this.loadBaicReport();
    }
    if (ref.props.heading === '研报') {
      this.loadStudyReport();
    }
    if (ref.props.heading === '财报') {
      this.loadFinancialReport();
    }
  }

  render() {
    if (!this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <Tabs onChangeTab={({ ref }) => this.changeTab(ref)} >
          <Tab heading='基本信息'>
            <BasicReport
              ref={(c) => (this.basic_report_view = c)}
              data={this.state.basic_report}
              code={this.state.stockCode}
              nav={this.props.navigation}
            />
          </Tab>
          <Tab heading='研报'>
            <StudyReport
              ref={(c) => (this.study_report_view = c)}
              data={this.state.study_report}
              code={this.state.stockCode}
              nav={this.props.navigation}
            />
          </Tab>
          <Tab heading='财报'>
            <FinancialReport
              ref={(c) => (this.financial_report_view = c)}
              data={this.state.financial_report}
              code={this.state.stockCode}
              nav={this.props.navigation}
            />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default ReportScreen;
