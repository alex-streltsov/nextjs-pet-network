import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminStats() {
  const [stats, setStats] = useState({ animals: 0, shops: 0, users: 0 });

  useEffect(() => {
    Promise.all([
      fetch('/animals.json').then(res => res.json()),
      fetch('/shops.json').then(res => res.json()),
      fetch('/users.json').then(res => res.json())
    ]).then(([animals, shops, users]) => {
      setStats({
        animals: animals.length,
        shops: shops.length,
        users: users.length
      });
    });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1> Статистика для администрации</h1>
      <ul style={{ fontSize: '20px', lineHeight: '2' }}>
        <li>Размещенных объявлений (животных): <b>{stats.animals}</b></li>
        <li>Зоомагазинов: <b>{stats.shops}</b></li>
        <li>Пользователей: <b>{stats.users}</b></li>
      </ul>
      <Link href="/">← Вернуться на главную</Link>
    </div>
  );
}