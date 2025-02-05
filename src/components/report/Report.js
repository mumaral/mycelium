import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CreditsManager from '../credits/CreditsManager';
import ReportSection from './ReportSection';
import ReportSpecialSection from './ReportSpecialSection';
import ReportTracks from './ReportTracks';
import withEvolution from '../providers/withEvolution';

class Report extends Component {
  filterDone = (classes) => {
    const { doneClasses } = this.props;
    return classes.filter((classe) => doneClasses.includes(classe));
  };

  filterDoing = (classes) => {
    const { doingClasses } = this.props;
    return classes.filter((classe) => doingClasses.includes(classe));
  };

  render() {
    const { name, nusp, obs, doneClasses, doingClasses } = this.props;
    return (
      <div className="pa4 opensans">
        <h1 className="tc f5 near-black b">Relatório de Conclusão de Curso</h1>
        <h3 className="tc f6 normal">Bacharelado e/ou Licenciatura em Ciências Biológicas</h3>
        <div className="flex flex-wrap justify-between mt4 f6">
          <span>
            <span className="b">Nome: </span>
            {name}
          </span>
          <span>
            <span className="b">NUSP: </span>
            {nusp}
          </span>
          <span className="w-100 mt1">
            <span className="b">Data de Geração do Relatório: </span>
            {moment().format('DD/MM/YYYY')}
          </span>
        </div>
        <CreditsManager doneClasses={[...doneClasses, ...doingClasses]}>
          {({
            mandatoryDone,
            mandatoryCredits,
            electiveDone,
            electiveCredits,
            freeDone,
            freeCredits,
          }) => (
            <React.Fragment>
              <ReportSection
                title="Disciplinas Obrigatórias do Núcleo Básico"
                classesFinished={this.filterDone(mandatoryDone)}
                classesOngoing={this.filterDoing(mandatoryDone)}
                credits={mandatoryCredits}
                totalCredits={122}
              />
              <ReportSection
                title="Disciplinas Optativas Eletivas do Bacharelado"
                classesFinished={this.filterDone(electiveDone)}
                classesOngoing={this.filterDoing(electiveDone)}
                credits={electiveCredits}
                totalCredits={52}
              />
              <ReportSection
                title="Disciplinas Optativas Livres do Bacharelado e/ou Licenciatura"
                classesFinished={this.filterDone(freeDone)}
                classesOngoing={this.filterDoing(freeDone)}
                credits={freeCredits}
                totalCredits={24}
              />
            </React.Fragment>
          )}
        </CreditsManager>
        <div className="mt5">
          <ReportTracks doneClasses={[...doneClasses, ...doingClasses]} />
        </div>
        <div className="mt5 mb3 f6 lh-title">
          <span className="b">Observações: </span>
          {obs}
        </div>
        <span className="f7 gray">
          Relatório gerado pelo sistema Mycelium
        </span>
      </div>
    );
  }
}

Report.propTypes = {
  name: PropTypes.string.isRequired,
  nusp: PropTypes.string.isRequired,
  obs: PropTypes.string,
  doneClasses: PropTypes.array.isRequired,
  doingClasses: PropTypes.array.isRequired,
};

export default withEvolution(Report);
