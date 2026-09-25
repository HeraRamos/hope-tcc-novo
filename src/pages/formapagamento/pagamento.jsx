import { useState } from "react";
import "./pagamento.css";

function Pagamento() {

  const [formaPagamento, setFormaPagamento] = useState("PIX");
  const [parcelas, setParcelas] = useState("1");

  const [pagamentos, setPagamentos] = useState([
    {
      cliente: "Ana Souza",
      servico: "Corte de cabelo",
      data: "24/09/2026",
      valor: "R$ 50,00",
      forma: "PIX",
      status: "Pago"
    },
    {
      cliente: "João Silva",
      servico: "Barba",
      data: "24/09/2026",
      valor: "R$ 35,00",
      forma: "Dinheiro",
      status: "Pago"
    },
    {
      cliente: "Maria Costa",
      servico: "Corte + Barba",
      data: "23/09/2026",
      valor: "R$ 80,00",
      forma: "Crédito 2x",
      status: "Parcelado"
    },
    {
      cliente: "Pedro Lima",
      servico: "Corte de cabelo",
      data: "23/09/2026",
      valor: "R$ 50,00",
      forma: "Débito",
      status: "Pago"
    }
  ]);

  const registrarPagamento = (e) => {
    e.preventDefault();

    alert("Pagamento registrado com sucesso!");

    e.target.reset();
    setFormaPagamento("PIX");
    setParcelas("1");
  };

  return (
    <div className="pagamento-page">

      {/* =========================================
          CABEÇALHO
      ========================================= */}

      <header className="pagamento-header">

        <div className="pagamento-header-left">
          <div className="pagamento-logo">
            HOPE
          </div>

          <div>
            <h1>Financeiro</h1>
            <p>Hope Barbearia</p>
          </div>
        </div>

        <div className="pagamento-header-user">

          <div className="pagamento-avatar">
            A
          </div>

          <div>
            <strong>Administrador</strong>
            <span>Minha conta</span>
          </div>

        </div>

      </header>


      {/* =========================================
          CONTEÚDO
      ========================================= */}

      <main className="pagamento-content">

        <div className="pagamento-heading">

          <div>

            <span className="pagamento-label">
              FINANCEIRO
            </span>

            <h2>Registrar pagamento</h2>

            <p>
              Registre pagamentos e acompanhe as movimentações financeiras
              da Hope Barbearia.
            </p>

          </div>

        </div>


        {/* =========================================
            CARDS DE RESUMO
        ========================================= */}

        <section className="pagamento-stats">

          <div className="pagamento-stat">

            <div className="stat-icon">
              R$
            </div>

            <div>
              <span>Faturamento do mês</span>
              <strong>R$ 8.450,00</strong>
            </div>

          </div>


          <div className="pagamento-stat">

            <div className="stat-icon">
              ✓
            </div>

            <div>
              <span>Pagamentos recebidos</span>
              <strong>127</strong>
            </div>

          </div>


          <div className="pagamento-stat">

            <div className="stat-icon">
              $
            </div>

            <div>
              <span>Valores pendentes</span>
              <strong>R$ 1.280,00</strong>
            </div>

          </div>


          <div className="pagamento-stat">

            <div className="stat-icon">
              #
            </div>

            <div>
              <span>Parcelamentos</span>
              <strong>18</strong>
            </div>

          </div>

        </section>


        {/* =========================================
            ÁREA PRINCIPAL
        ========================================= */}

        <section className="pagamento-grid">


          {/* =========================================
              FORMULÁRIO
          ========================================= */}

          <div className="pagamento-card">

            <div className="card-heading">

              <div>

                <span>REGISTRO</span>

                <h3>Novo pagamento</h3>

              </div>

            </div>


            <form onSubmit={registrarPagamento}>


              {/* CLIENTE */}

              <div className="form-group">

                <label>Cliente</label>

                <select required>

                  <option value="">
                    Selecione o cliente
                  </option>

                  <option>Ana Souza</option>
                  <option>João Silva</option>
                  <option>Maria Costa</option>
                  <option>Pedro Lima</option>
                  <option>Gabriel Santos</option>

                </select>

              </div>


              {/* SERVIÇO */}

              <div className="form-group">

                <label>Serviço</label>

                <select required>

                  <option value="">
                    Selecione o serviço
                  </option>

                  <option>Corte de cabelo</option>
                  <option>Barba</option>
                  <option>Corte + Barba</option>
                  <option>Sobrancelha</option>
                  <option>Platinado</option>

                </select>

              </div>


              {/* DATA + VALOR */}

              <div className="form-row">

                <div className="form-group">

                  <label>Data</label>

                  <input
                    type="date"
                    defaultValue="2026-09-24"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>Valor</label>

                  <input
                    type="number"
                    placeholder="0,00"
                    step="0.01"
                    min="0"
                    required
                  />

                </div>

              </div>


              {/* FORMA DE PAGAMENTO */}

              <div className="form-group">

                <label>Forma de pagamento</label>

                <div className="formas-pagamento">


                  <button
                    type="button"
                    className={
                      formaPagamento === "Dinheiro"
                        ? "forma-button selected"
                        : "forma-button"
                    }
                    onClick={() => setFormaPagamento("Dinheiro")}
                  >
                    <span>R$</span>
                    Dinheiro
                  </button>


                  <button
                    type="button"
                    className={
                      formaPagamento === "PIX"
                        ? "forma-button selected"
                        : "forma-button"
                    }
                    onClick={() => setFormaPagamento("PIX")}
                  >
                    <span>✦</span>
                    PIX
                  </button>


                  <button
                    type="button"
                    className={
                      formaPagamento === "Débito"
                        ? "forma-button selected"
                        : "forma-button"
                    }
                    onClick={() => setFormaPagamento("Débito")}
                  >
                    <span>▣</span>
                    Débito
                  </button>


                  <button
                    type="button"
                    className={
                      formaPagamento === "Crédito"
                        ? "forma-button selected"
                        : "forma-button"
                    }
                    onClick={() => setFormaPagamento("Crédito")}
                  >
                    <span>▤</span>
                    Crédito
                  </button>

                </div>

              </div>


              {/* PARCELAMENTO */}

              {formaPagamento === "Crédito" && (

                <div className="parcelamento-box">

                  <div>

                    <span className="parcelamento-label">
                      PARCELAMENTO
                    </span>

                    <strong>
                      Número de parcelas
                    </strong>

                    <p>
                      Escolha em quantas vezes o pagamento será dividido.
                    </p>

                  </div>


                  <select
                    value={parcelas}
                    onChange={(e) => setParcelas(e.target.value)}
                  >

                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="4">4x</option>
                    <option value="5">5x</option>
                    <option value="6">6x</option>
                    <option value="10">10x</option>
                    <option value="12">12x</option>

                  </select>

                </div>

              )}


              {/* OBSERVAÇÃO */}

              <div className="form-group">

                <label>Observações</label>

                <textarea
                  placeholder="Adicione alguma observação sobre o pagamento..."
                  rows="3"
                />

              </div>


              {/* BOTÕES */}

              <div className="form-actions">

                <button
                  type="button"
                  className="btn-cancelar"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="btn-registrar"
                >
                  Registrar pagamento
                </button>

              </div>

            </form>

          </div>


          {/* =========================================
              RESUMO
          ========================================= */}

          <aside className="pagamento-resumo">

            <div className="resumo-card">

              <div className="resumo-header">

                <span>RESUMO</span>

                <h3>Pagamento</h3>

              </div>


              <div className="resumo-content">

                <div className="resumo-row">

                  <span>Forma</span>

                  <strong>
                    {formaPagamento}
                  </strong>

                </div>


                {formaPagamento === "Crédito" && (

                  <div className="resumo-row">

                    <span>Parcelamento</span>

                    <strong>
                      {parcelas}x
                    </strong>

                  </div>

                )}


                <div className="resumo-total">

                  <span>Valor total</span>

                  <strong>
                    R$ 0,00
                  </strong>

                </div>

              </div>

            </div>


            <div className="resumo-info">

              <span>INFORMAÇÃO</span>

              <p>
                Os pagamentos registrados ficarão disponíveis
                no histórico financeiro da barbearia.
              </p>

            </div>

          </aside>

        </section>


        {/* =========================================
            HISTÓRICO
        ========================================= */}

        <section className="historico-card">

          <div className="historico-header">

            <div>

              <span>HISTÓRICO</span>

              <h3>Pagamentos recentes</h3>

            </div>

            <button>
              Ver todos
            </button>

          </div>


          <div className="tabela-container">

            <table>

              <thead>

                <tr>

                  <th>CLIENTE</th>
                  <th>SERVIÇO</th>
                  <th>DATA</th>
                  <th>VALOR</th>
                  <th>FORMA</th>
                  <th>STATUS</th>

                </tr>

              </thead>


              <tbody>

                {pagamentos.map((pagamento, index) => (

                  <tr key={index}>

                    <td>
                      <strong>
                        {pagamento.cliente}
                      </strong>
                    </td>

                    <td>
                      {pagamento.servico}
                    </td>

                    <td>
                      {pagamento.data}
                    </td>

                    <td>
                      <strong>
                        {pagamento.valor}
                      </strong>
                    </td>

                    <td>
                      {pagamento.forma}
                    </td>

                    <td>

                      <span
                        className={
                          pagamento.status === "Pago"
                            ? "status-pago"
                            : "status-parcelado"
                        }
                      >
                        {pagamento.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Pagamento;