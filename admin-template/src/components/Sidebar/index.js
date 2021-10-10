import { Container, Top, Bottom } from "./styles";

import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <Container>
      <Top>
        <div className={'gradient'}>
          Logo
        </div>

        <Link href={`/`}>
          <div className={`item`}>
            <AiOutlineHome size={22} />
            <span>Início</span>
          </div>
        </Link>

        <Link href={`/adjustments`}>
          <div className={`item`}>
            <GoSettings size={22} />
            <span>Ajustes</span>
          </div>
        </Link>

        <Link href={`/notifications`}>
          <div className={`item`}>
            <IoMdNotificationsOutline size={22} />
            <span>Notificações</span>
          </div>
        </Link>
      </Top>

      <Bottom>
        <div>
          <FiLogOut size={22} className={`icon`} />
          <span>Sair</span>
        </div>
      </Bottom>
    </Container>
  );
}