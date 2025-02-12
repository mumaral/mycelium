import React from 'react'
import { ElectivesContext } from './ElectivesProvider'

export default function withElectives(Component) {
  return function ElectivesInjectedComponent(props) {
    return (
      <ElectivesContext.Consumer>
        {({
          freeElectives,
          toggleElective,
          mandatoryClasses,
          clearElectives,
          importElectives,
          exportElectives,
        }) => (
          <Component
            {...props}
            freeElectives={freeElectives}
            toggleElective={toggleElective}
            mandatoryClasses={mandatoryClasses}
            clearElectives={clearElectives}
            importElectives={importElectives}
            exportElectives={exportElectives}
          />
        )}
      </ElectivesContext.Consumer>
    )
  }
}
