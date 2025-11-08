'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getCharacterById } from '../../data/characters';

export default function CharacterDetail() {
  const params = useParams();
  const character = getCharacterById(params.id);

  if (!character) {
    return (
      <div className="container">
        <div className="character-detail">
          <h1>الشخصية غير موجودة</h1>
          <Link href="/" className="back-button">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="character-detail">
        <Link href="/" className="back-button">
          ← العودة للصفحة الرئيسية
        </Link>

        <div className="detail-header">
          <div className="detail-image">
            {character.emoji}
          </div>
          <div className="detail-info">
            <h1>{character.name}</h1>
            <span className="character-type">{character.type}</span>
            <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
              {character.description}
            </p>
          </div>
        </div>

        <div className="detail-section">
          <h2>📖 نبذة عن الشخصية</h2>
          <p>{character.description}</p>
          <p>
            {character.name} من أقوى الشخصيات في لعبة Squad Busters، ويتميز بأسلوب لعب
            فريد يجعله خياراً ممتازاً للمبتدئين والمحترفين على حد سواء.
          </p>
        </div>

        <div className="detail-section">
          <h2>⚔️ المهارات والقدرات</h2>
          <ul className="skills-list">
            {character.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>💡 نصائح الاستخدام</h2>
          <p>
            • استخدم {character.name} في بداية المعركة للحصول على أفضل النتائج
          </p>
          <p>
            • حاول دمج مهارات {character.name} مع شخصيات أخرى لتشكيل فريق قوي
          </p>
          <p>
            • راقب نقاط القوة والضعف لدى {character.name} وتعلم متى تستخدمها
          </p>
          <p>
            • تدرب على استخدام المهارات في الوقت المناسب لتحقيق أقصى استفادة
          </p>
        </div>

        <div className="detail-section">
          <h2>🎯 الاستراتيجيات المثالية</h2>
          <p>
            يمكن استخدام {character.name} بفعالية في عدة سيناريوهات مختلفة.
            من الأفضل وضعه في مركز الفريق إذا كان من نوع {character.type}.
          </p>
          <p>
            تأكد من الموازنة بين الهجوم والدفاع عند استخدام هذه الشخصية،
            واستغل نقاط قوتها في اللحظات الحاسمة من المعركة.
          </p>
        </div>

        <div className="detail-section">
          <h2>🖼️ معرض الصور</h2>
          <div className="images-gallery">
            <div className="gallery-image">{character.emoji}</div>
            <div className="gallery-image">{character.emoji}</div>
            <div className="gallery-image">{character.emoji}</div>
            <div className="gallery-image">{character.emoji}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
