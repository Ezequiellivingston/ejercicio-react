import React, { useState } from 'react';
import './SimulateCredit.css';
import InputNumber from '../input-number/InputNumber';
import InputRange from '../input-range/InputRange';
import { formatCurrency } from '../../helpers/format';
import Button from '../button/Button';

function SimulateCredit() {
  const [value, setValue] = useState(0);

  const [plazo, setPlazo] = useState(0);

  function handleAmount(v) {
    setValue(v);
  }
  function handlePlazo(v) {
    setPlazo(v);
  }
  function trunc(x, posiciones = 0) {
    const s = x.toString();
    const decimalLength = s.indexOf('.') + 1;
    if (decimalLength === 0) return x;
    const numStr = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
  }
  function handleSimulateCredit(amount, cuota) {
    if (!amount || !cuota) return 0;
    const total = (amount / cuota);
    return trunc(total, 2);
  }
  return (
    <div className="db-card-simulator-container">
      <div className="db-card-simulator-card">
        <header className="db-card-simulator-card__header">
          <h2 className="db-card-simulator-title">Simulá tu crédito</h2>
        </header>

        <div className="db-card-simulator-card__body">
          <div className="db-card-simulator-total__amount">
            <h3 className="db-card-simulator-text__amount">MONTO TOTAL</h3>
            <div>
              <InputNumber
                value={value}
                onChange={(v) => handleAmount(v)}
                placeholder=""
                elementLeft={<span>$</span>}
              />
            </div>
          </div>

          <div className="db-card-simulator-range">
            <InputRange
              min={5000}
              max={50000}
              step={1}
              value={value}
              onChange={(v) => handleAmount(v)}
              indicatorRight={({ max }) => (
                <span>
                  $
                  {formatCurrency(max)}
                </span>
              )}
              indicatorLeft={({ min }) => (
                <span>
                  $
                  {formatCurrency(min)}
                </span>
              )}
            />
          </div>
          <div className="db-card-simulator-total__amount">
            <h3 className="db-card-simulator-text__amount">PLAZO</h3>
            <div>
              <InputNumber
                value={plazo}
                onChange={(v) => handlePlazo(v)}
                placeholder=""
              />
            </div>
          </div>
          <div className="db-card-simulator-range">
            <InputRange
              min={3}
              max={24}
              step={1}
              value={plazo}
              onChange={(v) => handlePlazo(v)}
              indicatorRight={({ max }) => (
                <span>
                  {formatCurrency(max)}
                </span>
              )}
            />
          </div>
        </div>
        <footer className="db-card-simulator__footer">
          <div className="db-card-simulator__footer_content">
            <h4>CUOTA FIJA POR MES</h4>
            <h2>
              $
              {handleSimulateCredit(value, plazo)}

            </h2>
          </div>
          <div className="db-card-simulator__footer_submit">
            <Button block>OBTENÉ CRÉDITO</Button>
            <Button textSmall variant="secondary">VER DETALLE DE CUOTAS</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SimulateCredit;
