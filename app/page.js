import Link from 'next/link'

// Exercício 2 da Receita 13 e Exercício 2 da Receita 14:
// Função exportada SEM ser por default no app/page.js para ser usada nas outras páginas.
export function MensagemExtra() {
    return (
        <div>
            <p>Bem-vindo ao sistema de receitas Next.js!</p>
        </div>
    )
}

// PÁGINA PRINCIPAL - Conecta todas as pastas das Receitas 13 a 21
export default function Home() {
    const receitas = [
        {
            num: '13',
            titulo: 'Next.js: aplicação e páginas',
            resumo: 'Criação da aplicação e páginas no diretório app.',
            href: '/receita-13',
        },
        {
            num: '14',
            titulo: 'Next.js: páginas e componentes',
            resumo: 'Criação de páginas e componentes personalizados.',
            href: '/receita-14',
        },
        {
            num: '15',
            titulo: 'Next.js: layouts e links',
            resumo: 'Estrutura de layout compartilhado e navegação com Link.',
            href: '/receita-15',
        },
        {
            num: '16',
            titulo: 'Data fetching I',
            resumo: 'Consulta à API de filmes OMDb renderizada no servidor.',
            href: '/receita-16',
        },
        {
            num: '17',
            titulo: 'Formulário de pesquisa',
            resumo: 'Envio de parâmetros de pesquisa usando o componente Form.',
            href: '/receita-17',
        },
        {
            num: '18',
            titulo: 'Data fetching e Client Components',
            resumo: 'Busca no navegador com gerenciamento de estado useState.',
            href: '/receita-18',
        },
        {
            num: '19',
            titulo: 'Implementação de API',
            resumo: 'Criação de rota de API própria no servidor Next.js.',
            href: '/receita-19',
        },
        {
            num: '20',
            titulo: 'Server Actions',
            resumo: 'Execução de funções no servidor chamadas diretamente do cliente.',
            href: '/receita-20',
        },
        {
            num: '21',
            titulo: 'Rotas dinâmicas e geração estática (SSG)',
            resumo: 'Páginas dinâmicas de filmes pré-renderizadas com generateStaticParams.',
            href: '/receita-21',
        },
    ]

    return (
        <div>
            <div style={styles.header}>
                <span style={styles.tag}>Programação Web</span>
                <h1 style={styles.title}>Receitas de 13 a 21 — Next.js</h1>
                <p style={styles.subtitle}>
                    Selecione uma receita abaixo para visualizar a implementação.
                </p>
            </div>

            <div style={styles.grid}>
                {receitas.map((r) => (
                    <Link key={r.num} href={r.href} style={styles.card}>
                        <div style={styles.cardTop}>
                            <span style={styles.badge}>Receita {r.num}</span>
                            <span style={styles.arrow}>→</span>
                        </div>
                        <h2 style={styles.cardTitle}>{r.titulo}</h2>
                        <p style={styles.cardText}>{r.resumo}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const styles = {
    header: {
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        color: '#ffffff',
        padding: '24px 28px',
        borderRadius: '12px',
        marginBottom: '24px',
    },
    tag: {
        display: 'inline-block',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '4px 12px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: '600',
        marginBottom: '8px',
    },
    title: {
        margin: '0 0 6px 0',
        fontSize: '26px',
        fontWeight: '700',
        color: '#ffffff',
        borderBottom: 'none',
        paddingBottom: 0,
    },
    subtitle: {
        margin: 0,
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.9)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px',
    },
    card: {
        display: 'block',
        textDecoration: 'none',
        color: '#1f2937',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px',
    },
    cardTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
    },
    badge: {
        backgroundColor: '#eef2ff',
        color: '#4f46e5',
        fontWeight: '700',
        fontSize: '12px',
        padding: '4px 10px',
        borderRadius: '6px',
    },
    arrow: {
        color: '#6366f1',
        fontWeight: '700',
        fontSize: '18px',
    },
    cardTitle: {
        margin: '0 0 6px 0',
        fontSize: '16px',
        color: '#111827',
    },
    cardText: {
        margin: 0,
        fontSize: '13.5px',
        color: '#6b7280',
    },
}
