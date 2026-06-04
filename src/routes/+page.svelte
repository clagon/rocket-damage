<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const levels = $derived(data.rocketDamage.levels);
  const strongest = $derived(levels.at(-1));
  const generated = $derived(new Intl.DateTimeFormat('ja-JP', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Tokyo'
  }).format(new Date(data.rocketDamage.generatedAt)));
</script>

<svelte:head>
  <title>Rocket Damage</title>
  <meta name="description" content="Clash Royale rocket mirror crown tower damage table." />
</svelte:head>

<main class="shell">
  <header class="hero">
    <div>
      <p class="kicker">Clash Royale</p>
      <h1>Rocket Damage</h1>
      <p class="summary">
        Rocket + Mirror rocket crown tower damage by tower level.
      </p>
    </div>

    <dl class="stats">
      <div>
        <dt>Base</dt>
        <dd>{data.rocketDamage.source.baseDamage}</dd>
      </div>
      <div>
        <dt>Max Total</dt>
        <dd>{strongest?.totalDamage ?? '-'}</dd>
      </div>
      <div>
        <dt>Updated</dt>
        <dd>{generated}</dd>
      </div>
    </dl>
  </header>

  <section class="table-wrap" aria-label="Rocket damage by tower level">
    <table>
      <thead>
        <tr>
          <th>Tower</th>
          <th>Rocket</th>
          <th>Mirror</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {#each levels as level (level.level)}
          <tr>
            <td>{level.level}</td>
            <td>{level.crownTowerDamage}</td>
            <td>{level.mirrorDamage}</td>
            <td>{level.totalDamage}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    min-height: 100dvh;
    background: #f7f4ee;
    color: #161616;
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .shell {
    width: min(960px, calc(100% - 32px));
    margin: 0 auto;
    padding: 48px 0;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 32px;
    align-items: end;
    margin-bottom: 28px;
  }

  .kicker {
    margin: 0 0 8px;
    color: #b83f12;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: 56px;
    line-height: 0.95;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .summary {
    max-width: 520px;
    margin: 16px 0 0;
    color: #555;
    font-size: 18px;
    line-height: 1.5;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(88px, 1fr));
    gap: 1px;
    overflow: hidden;
    border: 2px solid #161616;
    background: #161616;
  }

  .stats div {
    min-width: 0;
    background: #fff;
    padding: 14px 16px;
  }

  dt {
    margin-bottom: 6px;
    color: #656565;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    font-size: 18px;
    font-weight: 900;
    white-space: nowrap;
  }

  .table-wrap {
    overflow-x: auto;
    border: 2px solid #161616;
    background: #fff;
    box-shadow: 8px 8px 0 #161616;
  }

  table {
    width: 100%;
    min-width: 560px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 16px 18px;
    border-right: 2px solid #161616;
    border-bottom: 2px solid #161616;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  th:first-child,
  td:first-child {
    text-align: center;
  }

  th {
    background: #ffd84d;
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
  }

  td {
    font-size: 20px;
    font-weight: 800;
  }

  td:last-child,
  th:last-child {
    border-right: 0;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  tbody tr:hover {
    background: #eef6ff;
  }

  @media (max-width: 760px) {
    .shell {
      width: min(100% - 24px, 960px);
      padding: 28px 0;
    }

    .hero {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    h1 {
      font-size: 42px;
    }

    .stats {
      grid-template-columns: 1fr;
    }
  }
</style>
