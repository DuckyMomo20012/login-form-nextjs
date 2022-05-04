import { Box } from '@mantine/core';
import { HeaderLabel } from './Label.jsx';
import { HeaderMenu } from './Menu.jsx';
import { Resizer } from './Resizer.jsx';

const typeLabels = {
  id: {
    name: 'Title',
    icon: 'ic:outline-text-format',
    color: 'pink',
    shrink: false,
  },
  text: {
    name: 'Text',
    icon: 'ic:outline-notes',
    color: 'red',
    shrink: false,
  },
  number: {
    name: 'Number',
    icon: 'ic:outline-numbers',
    color: 'orange',
    shrink: false,
  },
  select: {
    name: 'Select',
    icon: 'ic:outline-arrow-drop-down-circle',
    color: 'amber',
    shrink: false,
  },
  'multi-select': {
    name: 'Multi-select',
    icon: 'ic:outline-format-list-bulleted',
    color: 'lime',
    shrink: false,
  },
  date: {
    name: 'Date',
    icon: 'ic:outline-event-note',
    color: 'emerald',
    shrink: false,
  },
  person: {
    name: 'Person',
    icon: 'ic:outline-group',
    color: 'sky',
    shrink: false,
  },
  'file-media': {
    name: 'File & media',
    icon: 'ic:outline-attach-file',
    color: 'indigo',
    shrink: false,
  },
  checkbox: {
    name: 'File & media',
    icon: 'ic:outline-check-box',
    color: 'purple',
    shrink: false,
  },
  url: {
    name: 'URL',
    icon: 'ic:outline-link',
    color: 'fuchsia',
    shrink: false,
  },
  email: {
    name: 'Email',
    icon: 'ic:outline-alternate-email',
    color: 'gray',
    shrink: false,
  },
  phone: {
    name: 'Phone',
    icon: 'ic:outline-phone',
    color: 'stone',
    shrink: false,
  },
  menu: {
    name: 'Menu',
    icon: 'ic:outline-menu',
    color: 'red',
    shrink: true,
  },
  add: {
    name: 'Add',
    icon: 'ic:outline-add',
    color: 'red',
    shrink: true,
  },
};

const Header = ({ column, dragHandleProps }) => {
  const {
    columnType,
    id: nameColumn,
    disableResizing,
    isDragDisabled,
  } = column;
  const type = typeLabels[columnType];
  const handlerProp = !isDragDisabled && dragHandleProps;

  return (
    <>
      <Box className="h-1/1 flex items-center" {...handlerProp}>
        {columnType === 'menu' && (
          <HeaderLabel {...typeLabels.add} onClick="" />
        )}
        <HeaderMenu
          column={column}
          control={<HeaderLabel {...type} label={nameColumn} />}
          shrink={type.shrink}
        />
      </Box>
      {!disableResizing && (
        <Resizer {...column.getResizerProps()} column={column} />
      )}
    </>
  );
};

export { Header };