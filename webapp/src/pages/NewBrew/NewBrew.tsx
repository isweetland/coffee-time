import { AddIcon } from '@chakra-ui/icons';
import {
    Flex,
    HStack,
    Input,
    VStack,
    Text,
    Select,
    InputGroup,
    InputRightElement,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    NumberInput,
    NumberInputField,
    Tag,
    TagLabel,
    TagCloseButton,
    useColorModeValue,
    Button,
    Wrap,
    WrapItem,
    Box,
    useColorMode,
} from '@chakra-ui/react';
import React, { MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import BrowserContext from '../../context/browser-context';
import ROContext from '../../context/resize-observer';
import coffeeCompass from '../../static/compass.jpg';
import useResizeObserver from '../../utils/useResizeObserver';
import useSize from '../../utils/useSize';

const NewBrew = () => {
    const borderColor = useColorModeValue('brand.200', 'accent');
    const hoverBorderColor = useColorModeValue('accent', 'brand.200');
    const focusBorderColor = useColorModeValue('accent', 'brand.200');
    const boxShadow = useColorModeValue(
        '0 0 0 1px var(--chakra-colors-accent)',
        '0 0 0 1px var(--chakra-colors-brand-200)'
    );

    const ref = useRef<HTMLDivElement>(null);
    const { subscribe, unsubscribe } = useContext(ROContext);

    const [coffee, setCoffee] = useState<number>();
    const [water, setWater] = useState<number>();
    const [grindSize, setGrindSize] = useState<number>(7);
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    const [tastingNotes, setTastingNotes] = useState<string[]>([]);
    const [tastingNote, setTastingNote] = useState('');

    const [width, height] = useSize(ref);

    return (
        <Flex justify="center" p={5} w="100%">
            <VStack spacing={5} ref={ref} maxW="100%">
                <VStack spacing={1} w="100%">
                    <Text alignSelf="flex-start">Bean</Text>
                    <Input />
                </VStack>
                <VStack spacing={1}>
                    <Flex justify="space-between" w="100%">
                        <Text>Coffee Used</Text>
                        <Text>Water Used</Text>
                    </Flex>
                    <HStack>
                        <InputGroup>
                            <Input pr="5rem" type="number" onChange={({ target }) => setCoffee(+target.value)} />
                            <InputRightElement bg="transparent" w="4.5rem" zIndex={1}>
                                <Select defaultValue="g" zIndex={1} border="0" _hover={{ cursor: 'pointer' }}>
                                    <option value="grams">g</option>
                                    <option value="ounces">oz</option>
                                </Select>
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup>
                            <Input pr="5rem" type="number" onChange={({ target }) => setWater(+target.value)} />
                            <InputRightElement bg="transparent" w="4.5rem" zIndex={1}>
                                <Select defaultValue="g" zIndex={1} border="0" _hover={{ cursor: 'pointer' }}>
                                    <option value="grams">g</option>
                                    <option value="ounces">ml</option>
                                    <option value="ounces">oz</option>
                                </Select>
                            </InputRightElement>
                        </InputGroup>
                    </HStack>

                    {!!coffee && !!water && <Text alignSelf="flex-end"> = {coffee * (1000 / water)} g/L</Text>}
                </VStack>
                <VStack spacing={1} w="100%">
                    <Text alignSelf="flex-start">Grind Size: {GRIND_SIZES[grindSize - 1]}</Text>
                    <HStack w="100%" spacing={3}>
                        <Text>Fine</Text>
                        <Slider
                            aria-label="slider-ex-1"
                            value={grindSize}
                            min={1}
                            max={13}
                            step={1}
                            onChange={(val) => setGrindSize(val)}
                        >
                            <SliderTrack>
                                <SliderFilledTrack bg={borderColor} />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Text>Coarse</Text>
                    </HStack>
                </VStack>
                <HStack alignSelf="flex-start">
                    <Input placeholder="Grinder Used?" />
                    <Input placeholder="Grinder Setting?" />
                </HStack>
                <VStack spacing={1} alignSelf="flex-start">
                    <Text alignSelf="flex-start">Brew Duration (M:S)</Text>
                    <HStack
                        border="1px solid"
                        borderColor={borderColor}
                        _hover={{ borderColor: hoverBorderColor }}
                        _focusWithin={{
                            borderColor: focusBorderColor,
                            boxShadow: boxShadow,
                        }}
                        borderRadius="md"
                        transitionDuration="normal"
                        transitionProperty="common"
                        w="10rem"
                    >
                        <NumberInput min={0} max={59} value={time.minutes}>
                            <NumberInputField
                                textAlign="end"
                                border="0"
                                paddingInlineEnd={2}
                                onChange={({ target }) => setTime({ ...time, minutes: +target.value })}
                                _focus={{}}
                            />
                        </NumberInput>
                        <Text>:</Text>
                        <NumberInput min={0} value={time.seconds}>
                            <NumberInputField
                                textAlign="start"
                                border="0"
                                paddingInlineStart={2}
                                onChange={({ target }) => setTime({ ...time, seconds: +target.value })}
                                _focus={{}}
                                onBlur={() => {
                                    const newTime = {
                                        minutes: time.minutes + Math.floor(time.seconds / 60),
                                        seconds: time.seconds % 60,
                                    };
                                    setTime({ ...newTime });
                                }}
                            />
                        </NumberInput>
                    </HStack>
                </VStack>
                <VStack w="100%">
                    <Text alignSelf="flex-start">Notes</Text>
                    <Wrap maxW={width} alignSelf="flex-start">
                        {tastingNotes.map((tn, idx) => (
                            <WrapItem maxW={width} key={idx}>
                                <CustomTag
                                    label={tn}
                                    onRemove={(tag) => setTastingNotes(tastingNotes.filter((tn) => tn !== tag))}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                    <InputGroup>
                        <Input
                            pr="4.5rem"
                            placeholder="Tasting Note"
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    tastingNote &&
                                        !tastingNotes
                                            .map((tn) => tn.toLowerCase())
                                            .includes(tastingNote.toLowerCase()) &&
                                        setTastingNotes([...tastingNotes, tastingNote]);
                                    setTastingNote('');
                                }
                            }}
                            onChange={({ target }) => setTastingNote(target.value)}
                            value={tastingNote}
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                aria-label="Add Tasting Note"
                                onClick={() => {
                                    if (
                                        tastingNote &&
                                        !tastingNotes.map((tn) => tn.toLowerCase()).includes(tastingNote.toLowerCase())
                                    ) {
                                        setTastingNotes([...tastingNotes, tastingNote]);
                                    }
                                    setTastingNote('');
                                }}
                            >
                                Add
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </VStack>
                <VStack>
                    <Compass size={`${Math.min(700, width)}px`} />
                    <HStack>
                        <Button aria-label="Save Compass Selection">Save</Button>
                        <Button aria-label="Reset Compass Selection">Reset</Button>
                    </HStack>
                </VStack>
            </VStack>
        </Flex>
    );
};

const CustomTag = ({ onRemove, label }: { onRemove: (tag: ReactNode) => void; label: string }) => {
    return (
        <HStack spacing={4} maxW="100%">
            <Tag borderRadius="full" variant="solid" bg="brand.100">
                <TagLabel color="black">
                    <Text isTruncated>{label}</Text>
                </TagLabel>
                <TagCloseButton onClick={() => onRemove(label)} color="black" />
            </Tag>
        </HStack>
    );
};

const Compass = ({ size }: { size: string }) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    const clickHandler: MouseEventHandler<HTMLCanvasElement> = ({ clientX, clientY }) => {
        if (!canvas.current) return;
        const { left, top } = canvas.current?.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        drawX(x, y);
    };

    const drawX = (x: number, y: number) => {
        const ctx = canvas.current?.getContext('2d');
        if (!ctx || !canvas.current) return;
        const { width, height } = canvas.current;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.moveTo(x - width * 0.03, y - width * 0.03);
        ctx.lineTo(x + width * 0.03, y + width * 0.03);
        ctx.moveTo(x + width * 0.03, y - width * 0.03);
        ctx.lineTo(x - width * 0.03, y + width * 0.03);
        ctx.strokeStyle = '#a0583c';
        ctx.lineWidth = 3;
        ctx.stroke();
    };

    useEffect(() => {
        if (!canvas.current) return;
        canvas.current.width = canvas.current.offsetWidth;
        canvas.current.height = canvas.current.offsetHeight;
    }, [canvas.current, size]);

    return (
        <Box style={{ width: size, height: size }} border="1px solid" borderColor="black">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        userSelect: 'none',
                    }}
                    src={coffeeCompass}
                />
                <canvas
                    ref={canvas}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                    }}
                    onClick={clickHandler}
                />
            </div>
        </Box>
    );
};

const GRIND_SIZES = [
    'Extra-Fine',
    'Extra-Fine to Fine',
    'Fine',
    'Fine to Medium-Fine',
    'Medium-Fine',
    'Medium-Fine to Medium',
    'Medium',
    'Medium to Medium-Coarse',
    'Medium-Coarse',
    'Medium-Coarse to Coarse',
    'Coarse',
    'Coarse to Extra-Coarse',
    'Extra-Coarse',
];

export default NewBrew;
