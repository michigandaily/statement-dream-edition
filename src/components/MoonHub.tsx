import React, { useMemo } from "react";
import "../css/main.scss";

export interface Article {
    id: string;
    title: string;
    url: string;
}

interface MoonHubProps {
    articles: Article[];
    moonSize?: number;
    orbitRadius?: number;
}

export const MoonHub: React.FC<React.PropsWithChildren<MoonHubProps>> = ({
    articles,
    moonSize = 120,
    orbitRadius = 70,
}) => {
    const total = articles.length;

    const positions = useMemo(
        () =>
            articles.map((_, idx) => {
                const theta = (idx / total) * 2 * Math.PI;
                const r = orbitRadius;
                const x = 50 + (r * Math.cos(theta)) / 2;
                const y = 50 + (r * Math.sin(theta)) / 2;
                return { xPercent: x, yPercent: y };
            }),
        [articles, orbitRadius, total]
    );

    return (
        <div className="moon-hub">
            <div
                className="moon-hub__moon"
                style={{ width: moonSize, height: moonSize }}
                aria-hidden="true"
            />

            {articles.map((article, idx) => {
                const pos = positions[idx];
                return (
                    <a
                        key={article.id}
                        href={article.url}
                        className="moon-hub__piece-link"
                        style={{ left: `${pos.xPercent}%`, top: `${pos.yPercent}%` }}
                        aria-label={article.title}
                    >
                        {article.title}
                    </a>
                );
            })}

            <svg
                className="moon-hub__arcs"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {positions.map((p, idx) => (
                    <path
                        key={articles[idx].id}
                        className="orbit-arc"
                        d={`M50 50 Q ${(50 + p.xPercent) / 2} ${(50 + p.yPercent) / 2} ${p.xPercent} ${p.yPercent}`}
                    />
                ))}
            </svg>
        </div>
    );
};

export default MoonHub;

