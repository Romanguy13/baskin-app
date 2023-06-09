import { Attribute } from '@/graphql/category/schema';
import { Select, Option, Box, Typography, ListItemDecorator, Checkbox } from '@mui/joy';
import { Filter, useAppContext } from '../../context';

interface Props {
  attribute: Attribute;
}

export default function AttributeSet({ attribute }: Props) {
  const { refinement, setRefinement } = useAppContext();

  const handleClick = (value: string) => {
    const filters: Filter[] = refinement.filters.map(filter => {
      // skip filters unrelated to this attribute
      if (filter.id !== attribute.id) return filter;

      // if value already in selection, remove it
      if (filter.selection.includes(value)) return {
        id: filter.id,
        selection: filter.selection.filter((item: string) => item !== value),
      };

      // else, add it to the selection
      return {
        id: filter.id,
        selection: [...filter.selection, value],
      };
    });

    // update filters
    setRefinement({
      ...refinement,
      filters: filters,
    });
  };

  const selection = refinement.filters.find(filter => filter.id === attribute.id)?.selection;

  const renderValue = () => {
    if (selection.length > 0) {
      return selection.join(', ');
    } else {
      return 'All';
    }
  };

  return (
    <Box>
      <Typography fontWeight="lg" pb={1}>
        {attribute.name}
      </Typography>
      <Select
        defaultValue={attribute.values && attribute.values[0]}
        renderValue={renderValue}
        sx={{ bgcolor: 'background.body' }}
      >
        {attribute.values?.map(value => (
          <div
            key={value}
            onPointerDown={() => handleClick(value)}
            data-testid={value}
            id="HELLO??"
          >
            <Option
              color="neutral"
              value={value}
              sx={{ fontWeight: 'md', bgcolor: 'var(--joy-palette-background-popup) !important' }}
            >
              <ListItemDecorator>
                <Checkbox checked={selection?.includes(value)}/>
              </ListItemDecorator>
              {value}
            </Option>
          </div>
        ))}
      </Select>
    </Box>
  );
}
